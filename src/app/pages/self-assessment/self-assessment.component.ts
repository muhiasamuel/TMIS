import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrl: './self-assessment.component.scss'
})
export class SelfAssessmentComponent {
  constructor(private route:Router){}
  clicked(){
    this.route.navigate(['/dashboard']);
    
  }
}
