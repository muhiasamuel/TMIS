import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPotentialIdentification } from '../../../IPotentialIdentification';

@Component({
  selector: 'app-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrls: ['./self-assessment.component.scss']
})

export class SelfAssessmentComponent {
  scoreOptions: number[] = [1,2,3,4,5];
  potentialIdentificationData: IPotentialIdentification [] = [
  {id: 1,
   potentialattribute: 'Aspiration', 
   descriptor: 'Hunger for success. Has a strong desire to work hard to achieve goals, sets a high bar for themselves',
   score: 1, 
  },
  {
    id: 2,
    potentialattribute: 'Aspiration',
    descriptor: 'Purposeful. Has a clear sense of purpose and knows what mark they want to make, strategically selective about what initiatives to engage in',
    score: 2,
  },
  {
    id: 3,
    potentialattribute: 'Aspiration',
    descriptor: 'Immersion: Looks for roles that require a personal commitment above the norm, prepared to offer discretionary effort beyond their role',
    score:5,
  },
  {
    id:4,
    potentialattribute: 'Aspiration',
    descriptor: 'Activity: Prefers fast-paced, multi-tasking work environments that offer regular learning opportunities and execution challenge',
    score:4,
  },
  {
    id:5,
    potentialattribute:'Aspiration',
    descriptor: 'Power: Wants the opportunity to exercise influence and shape how things are done, eager to put their ideas into practice and learn',
    score: 2,
  },
  {
    id:6,
    potentialattribute:'Aspiration',
    descriptor: 'Autonomy: Attracted to roles that allow them autonomy in how they execute their responsibilities. Thrive is self regulated roles',
    score: 3,
  }
  
]
  constructor(private route:Router){}
  clicked(){
    this.route.navigate(['/dashboard']);
    
  }
}