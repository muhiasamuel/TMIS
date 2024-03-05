import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-assessment-questions',
  templateUrl: './add-assessment-questions.component.html',
  styleUrl: './add-assessment-questions.component.scss'
})
export class AddAssessmentQuestionsComponent {
  attributes: any = ['Aspiration', 'Judgement', 'Drive', 'Change Agility'];
  questionForm: FormGroup = new FormGroup({
    questionList: new FormArray([this.getQuestionFields()]),
  });

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
