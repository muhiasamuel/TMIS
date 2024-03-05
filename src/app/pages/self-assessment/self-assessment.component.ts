import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssessmentService } from '../../services/data/assessment.service';
import { log } from 'console';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {  FormArray} from '@angular/forms';

@Component({
  selector: 'app-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrl: './self-assessment.component.scss'
})
export class SelfAssessmentComponent implements OnInit{
  options = [1,2,3,4,5]
  potential_attributes = [{ 'potential_attributes_name':'aspiration'},{'potential_attributes_name':'judgement'}]
  data :any;
  aspirationForm!: FormGroup;
  potentials:Array<any> = [
    {id: 1, Potintial: 'Aspiration', Descriptor:'Hunger for success. Has a strong desire to work hard to achieve goals, sets a high bar for themselves'},
    {id: 2, Potintial: 'Aspiration', Descriptor:'Purposeful. Has a clear sense of purpose and knows what mark they want to make, strategically selective about what initiatives to engage in'},
    {id: 1, Potintial: 'judjement', Descriptor:'Hunger for success. Has a strong desire to work hard to achieve goals, sets a high bar for themselves'},
    {id: 2, Potintial: 'judgement', Descriptor:'Purposeful. Has a clear sense of purpose and knows what mark they want to make, strategically selective about what initiatives to engage in'},
  ];
  questionForm: any;

  ngOnInit(): void {
    this.aspirationForm = this.fb.group([]);
    this.potentials.forEach(item => {
      this.aspirationForm.addControl(item.Descriptor.toString(), new FormControl('', Validators.required));
    });
  }
  
  // selectedOption:string = '';
  // radioChangeHandler ( event:any) {
    
  //   this.data = {
  //     "potential":this.potentials,
  //     "selected Option":event.target.value
  //   }
  //   this.selectedOption = event.target.value
  //   console.log(this.data)
  // }
  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  secondFormGroup = this.fb.group({
    secondCtrl: '',
  });
  isOptional = true;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.aspirationForm.value);
  }

  getQuestionFields(): FormGroup {
    return new FormGroup({
      question_description: new FormControl(""),
      attribute_name: new FormControl(""),
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

  getFormData() {
    let serverData: any = [],
      tempquestionFormData = JSON.parse(JSON.stringify(this.questionForm.value));
    tempquestionFormData.questionList.forEach((element: any) => {
      let tempObj: any = {
        assessmentQuestionDescription: element.question_description,
        attributeId: element.attribute_name,
        
        choices: [],
      };
      element.questionChoices.questionChoicesArray.forEach(
        (elementSubjectObj: any) => {
          let tempSubObj: any = {
            choice_name: elementSubjectObj.choice_name,
            choice_value: elementSubjectObj.choice_value,
          };
          tempObj.choices.push(tempSubObj);
        }
      );
      tempObj.choices = JSON.stringify(tempObj.choices);
      serverData.push(tempObj);
    });
    
    console.log(serverData);  // This is the variable which contain all the form data
    /*

      Here we have 3 columns ( keys )
      #attribute
      #assessmentdescription
      #choices

      FOR SQL :- Now we can store it very simply in mysql database you only need to create one table which contain 4 columns name (type = varchar), class (type = varchar), age (teype = varchar) and subject (type = json)
      FOR NoSQL :- It is very simple in noSQL databases like MONGODB here we have 4 keys and only we need to store the information in db
    */
  }



}
  


