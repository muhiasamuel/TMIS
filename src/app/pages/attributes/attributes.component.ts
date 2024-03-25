import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpServiceService } from '../../services/http-service.service';
import { Dialog } from '@angular/cdk/dialog';
import { TimerDialogComponent } from '../timer-dialog/timer-dialog.component';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

export interface Answer{
  userId: any
  choiceId: any
  managerId: any
  questionId: any
}

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.scss'
})
export class AttributesComponent {
  answers: any[] = []
  value: any[] = []
  questionIds: any[] = []
  systemUser: any
  assId: any
  startQuiz: Boolean = true
  assQuestions: any[] = []
  managerId:any

  
  assignment = {
    "assessmentName":"",
    "assessmentDescription":""
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  questionForm: any
  names: any[] = []

  
  

  isLinear = true;

  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute,
    private dialog: Dialog,
    private http: HttpClient, 
    private server: HttpServiceService) {}

  ngOnInit(){
    this.systemUser = JSON.parse(localStorage.getItem("user"))
    this.route.params.subscribe(params => {
      this.assId = params['id']; // Access the 'id' parameter from the URL
      console.log('Test ID:', this.assId);
    });
    this.getAssessment(this.assId)
    this.questionForm = this._formBuilder.group({
      
    })
   // console.log("question ids",this.questionIds)
   // console.log("user-manager",this.systemUser.manager.userId)


    //this.getThem()
   // this.checkAss(this.value)
    
  }

  getThem(){
    const url = `${this.server.serverUrl}/userAssessment?assId=${this.assId}&userId=${this.systemUser.userId}`
    const res = this.http.get(url)

    res.subscribe(
      (response: any) => {
        for(let i = 0; i < response.item.length; i++){
        console.log("res",)
        if(response.item[i].assessmentId == this.assId && response.item[i].employeeId == this.systemUser.userId){
          this.value.push(response.item[i])
        }
        }
        console.log("value",this.value)
        
      },
      (error: any) => {
          console.log(error)
      }
    )
  }

  checkAss(value:any[]){
    console.log("first",value.length)

    for(let i = 0; i < value.length; i++){
      console.log( `iteration -> ${i} assessmentId: ${value[i].assessmentId} -> myId: ${this.assId}`);
      console.log( `iteration -> ${i} employeeId: ${value[i].employeeId} -> userId: ${this.systemUser.userId}`);


        if(value[i].assessmentId == this.assId && value[i].employeeId == this.systemUser.userId){
            this.answers.push(value[i])
        }
      }

      console.log("answers",this.answers);
  }

  getAssessment(id:any){
    const url = `${this.server.serverUrl}/getAssess?assId=${id}`
    const res = this.http.get(url)

    res.subscribe(
      (response: any) =>{
        this.assignment = response.item
        this.assQuestions = response.item.assessmentQuestions
        this.assQuestions.forEach((question: any) => {
          this.questionIds.push(question.assessmentQuestionId)
          this.names.push(question.assessmentQuestionId)
          this.questionForm.addControl(
            `${question.assessmentQuestionId}`, this._formBuilder.control('')
          );
        });
        
       // console.log("Assignment Response", this.assQuestions)

      },
      (error: any) =>{
        console.log("Assignment Response", error)
      }
    )
  }

  startAssignment(){
    // this.dialog.open(TimerDialogComponent,{
    //   width: '25%'
    // })

    this.startQuiz = false
  }

  collectUserInput(){
  const answers: Answer[] = []
    for (let index = 0; index < this.assQuestions.length; index++) {
      const element = this.assQuestions[index];
      const formControlName = this.names[index]
      const questionId = this.questionIds[index]
      const choiceId = this.questionForm.value[formControlName].choiceId
     // console.log("question id",questionId)
     // console.log("choice id", choiceId)
     // console.log("user id",this.systemUser.userId)

      const answer =  {
        "userId" : this.systemUser.userId,
        "choiceId" : choiceId,
        "managerId":0,
        "questionId": questionId
      }
      console.log("answer",answer)
      answers.push(answer)
    }

    if(answers.length == this.assQuestions.length && answers.length > 0){
      const url = `${this.server.serverUrl}/addAnswers?assId=${this.assId}&manId=${this.systemUser.manager.userId}`
      const response = this.http.post(url, answers)
      response.subscribe(
        (res: any) => {
          console.log(res)
        },
        (error: any) => {
          console.log(error)
        }
      )

    }



  }



}
