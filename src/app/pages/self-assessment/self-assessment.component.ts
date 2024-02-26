import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';


interface Row{
  potentialAttribute: string;
  behavioralDescriptor: string;
  description: string;
  score: number;
  subTotal:string; 
}
=======
import { AssessmentService } from '../../services/data/assessment.service';
import { log } from 'console';
>>>>>>> b02d39a2e8e74f91fdcac51bcc931b10a2f6320f

@Component({
  selector: 'app-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrl: './self-assessment.component.scss'
})
<<<<<<< HEAD
export class SelfAssessmentComponent {
index: any

  rows: Row[] = [
    {potentialAttribute: 'Aspiration', behavioralDescriptor: 'Hunger for Success', description: 'Has a strong desire to work hard to achieve goals, sets a high bar for themselves', score: 3, subTotal: '0'},
    {potentialAttribute: 'Aspiration', behavioralDescriptor: 'Purposeful.', description: 'Has a clear sense of purpose and knows what mark they want to make, strategically selective about what initiatives to engage in', score: 3, subTotal: ''},
    {potentialAttribute: 'Aspiration', behavioralDescriptor: 'Immersion.', description: 'Looks for roles that require a personal commitment above the norm, prepared to offer discretionary effort beyond their role', score: 4, subTotal: ''},
    {potentialAttribute: 'Aspiration', behavioralDescriptor: 'Flexibility.', description: 'Seeks out work environments that allow them more fluid ways of working, optimally leverages digital capabiities in execution', score: 4, subTotal: ''},
    {potentialAttribute: 'Aspiration', behavioralDescriptor: 'Interest.', description: 'Looks for roles and assignments that provide variety and stimulation. Commits to organisational strategic goals, mission, vision and values', score: 2, subTotal: ''},
  ]

  calculateSubtotal(row: Row): number {
    return row.score * 1; // Here you can perform any calculation you need for the subtotal
  }
i: any;

showDescription:boolean =false;

scoringDescription() {
  this.showDescription = !this.showDescription
}

  editRow(index: number, newName: string): void {
    this.rows[index].potentialAttribute = newName;
  }
/*
  addAttribute() {
    this.rows.push({
      potentialAttribute: '',
      behavioralDescriptor: '',
      description: '',
      score: 0,
      subTotal: ''
    })
    
    
  }

  removeAttribute(index: number) {
    this.rows.splice(index, 1);
}
*/

calculateAvarage() {

  let sum = 0

  
}

  
  constructor(private route:Router){}
  clicked(){
    this.route.navigate(['/dashboard']);
    
  }
=======
export class SelfAssessmentComponent implements OnInit{
  asessment: any=''
  aspiration:any =''
  constructor(private route:Router,
   public dataService:AssessmentService){}

    ngOnInit(): void {
      this.getAssessmentData()
    }

    getAssessmentData(){
     let data = this.dataService.getData()
     this.asessment = data
     this.aspiration = data[0]
     console.log(this.aspiration);
     
     
    }

>>>>>>> b02d39a2e8e74f91fdcac51bcc931b10a2f6320f
}
