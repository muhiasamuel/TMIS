import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssessmentService } from '../../services/data/assessment.service';
import { log } from 'console';

@Component({
  selector: 'app-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrl: './self-assessment.component.scss'
})
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

}
