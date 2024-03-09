import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl,Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddPotentialDescriptorComponent } from '../add-potential-descriptor/add-potential-descriptor.component';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule, MatStepper} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { provideNativeDateAdapter } from '@angular/material/core';
import { HttpServiceService } from '../../services/http-service.service';
import moment from 'moment';
import { log } from 'console';
@Component({
  selector: 'app-add-assessment-questions',
  templateUrl: './add-assessment-questions.component.html',
  styleUrl: './add-assessment-questions.component.scss',
  providers: [provideNativeDateAdapter()],
}) 
export class AddAssessmentQuestionsComponent implements OnInit{
  assessmentAttributes: any;
  assessments:any[] = [];
  targetGroup = ["IT",'Oprerations',"Credit","Insutance","The Group"]
  attributes: any ;
  assessmentData:any
  myVariable: string | null | undefined;
  assessmentForm:FormGroup = new FormGroup({
    target:new FormControl(""),
    assessmentName:new FormControl(""),
    assessmentDescription:new FormControl(""),
    endDate : new FormControl(new Date().toISOString()),
    potentialAttributeId:new FormControl(""),


  })
  questionForm: FormGroup = new FormGroup({
    questionList: new FormArray([this.getQuestionFields()]),
  });
 
  stepperOrientation: Observable<StepperOrientation>;  
     
  @ViewChild(MatStepper) stepper!: MatStepper;
  constructor(private fb:FormBuilder,private dialog:MatDialog, private http: HttpServiceService,
    breakpointObserver: BreakpointObserver,) {  
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  
  } 

  ngOnInit(): void {
    this.getAssessmentAttribute()
  }
  getQuestionFields(): FormGroup {
    return new FormGroup({
      question_description: new FormControl(""),
      questionChoices: new FormGroup({
        questionChoicesArray: new FormArray([this.putNewChoices()]),
      }),
    });
  }

  putNewChoices() {
    return new FormGroup({
      choice_name: new FormControl(""),
      choice_value: new FormControl(""),
    });
  }

  questionListArray() {
    return this.questionForm.get("questionList") as FormArray;
  }

  addQuestion() {
    this.questionListArray().push(this.getQuestionFields());
  }

  removeQuestion(i: number) {
    this.questionListArray().removeAt(i);
  }

  choicesFormGroup(i: number) {
    return this.questionListArray().at(i).get("questionChoices") as FormGroup;
  }

  choicesArray(i: number) {
    return this.choicesFormGroup(i).get("questionChoicesArray") as FormArray;
  }

  addNewSubject(i: number) {
    this.choicesArray(i).push(this.putNewChoices());
  }

  removeNewChoice(i: number, j: number) {
    this.choicesArray(i).removeAt(j);
  }
  getAddedAttributes(newItem: any) {
    this.attributes = newItem.item
    if (this.stepper) {
      this.stepper.next();
    }
    console.log("12345678",this.attributes);
  }
  isStepComplete(): boolean {
    return this.attributes && this.attributes.length > 0;
  }

  getFormData() {
    let serverData: any = [],
     targetData = JSON.parse(JSON.stringify(this.assessmentForm.value)),
      tempquestionFormData = JSON.parse(JSON.stringify(this.questionForm.value));
    tempquestionFormData.questionList.forEach((element: any) => {
      let tempObj: any = {
        assessmentQuestionDescription: element.question_description,
        choices: [],
      };
      element.questionChoices.questionChoicesArray.forEach(
        (elementSubjectObj: any) => {
          let tempSubObj: any = {
            choiceName: elementSubjectObj.choice_name,
            choiceValue: elementSubjectObj.choice_value,
          };
          tempObj.choices.push(tempSubObj);
        }
      );
      serverData.push(tempObj);
    });
    const formattedEndDate = moment(targetData.endDate).format('YYYY-MM-DD');
    targetData = {
      ...targetData,
      endDate: formattedEndDate,
      createdAt: moment().format('YYYY-MM-DD')
    };

   this.addAssessmentQuestions(targetData,serverData)


    console.log("target data",targetData);
    
    
    console.log(serverData);  // This is the variable which contain all the form data
  
  }
  //adding assessments and assessment questions
  addAssessmentQuestions(targetData:any, serverData:any){
   const attributeId = targetData.potentialAttributeId
   if (!attributeId) {
    window.alert("attribute is required")
   }else{
    this.http.createAssessment(attributeId,targetData).subscribe(
      ((res) =>{
        this.assessmentData = res.item.assessments[0]
        console.log(res);
        
      }),
      ((error) =>{
        console.error(error);
        
      }),
      ()=>{
        console.log("1234567890", this.assessmentData);
        
        if (!this.assessmentData) {
          window.alert("assessment empty")
        }else{
          const assId = this.assessmentData?.assessmentId
          this.http.createAssessmentQuestions(assId, serverData).subscribe(
            ((res) =>{
              console.log(res);
            }),
            ((error) =>{console.error(error)}),
            () => {
              window.alert("Assignment Added successifuly")
            }
          )
        }

      }
    )
   }
  }

//getting attributes, assessment and assessment questions
getAssessmentAttribute(){
  this.http.getAssessments(1).subscribe(
    ((res)=>{
      if (res) {
        this.assessmentAttributes= res?.item

        console.log("request successful",this.assessmentAttributes);
      }else{
          window.alert('data not available')
      }
    }),
    ((error)=>{
      console.error("request hqas an error",error);
    }),
    ()=>{
      console.log("success");
      
    }
  )
}
}
