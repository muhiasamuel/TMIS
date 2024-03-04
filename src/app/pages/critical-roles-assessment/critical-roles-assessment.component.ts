
import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpServiceService } from '../../services/http-service.service';

/**
 * @title Stepper that displays errors in the steps
 */
  @Component({
    selector: 'app-critical-roles-assessment',
    templateUrl: './critical-roles-assessment.component.html',
    styleUrl: './critical-roles-assessment.component.scss',
    providers: [
      {
        provide: STEPPER_GLOBAL_OPTIONS,
        useValue: {showError: true},
      },
    ],
  })
  export class CriticalRolesAssessmentComponent {
    isEditable = false;
    formData:any;
    selectedScore!: string;
    scores: number[] = [1, 2, 3, 4, 5 ];
    // Form Groups for each step with relevant controls
    roleNameFormGroup: FormGroup = new FormGroup({
      roleName: new FormControl('', [Validators.required]),
    });
  
    strategicImportanceFormGroup: FormGroup = new FormGroup({
      strategicImportance: new FormControl('',[Validators.required]),
    });

    revenueImpactFormGroup: FormGroup = new FormGroup({
      revenueImpact: new FormControl('', [Validators.required]),
    });

    vacancyRiskFormGroup: FormGroup = new FormGroup({
      vacancyRisk: new FormControl('', [Validators.required]),
    });
  
    impactOnOperationFormGroup: FormGroup = new FormGroup({
      impactOnOperation: new FormControl('', [Validators.required]),
    });

    skillExpirienceFormGroup: FormGroup = new FormGroup({
      skillExpirience: new FormControl('', [Validators.required]),
    });

    talentStrategyFormGroup: FormGroup = new FormGroup({
      talentStrategy: new FormControl('', [Validators.required]),
    });

    constructor(private http:HttpServiceService){}

   async processValues() {
      const roleName = this.roleNameFormGroup?.get('roleName')?.value;
      const strategicImportance = this.strategicImportanceFormGroup?.get('strategicImportance')?.value;
      const revenueImpact = this.revenueImpactFormGroup?.get('revenueImpact')?.value;
      const vacancyRisk = this.vacancyRiskFormGroup?.get('vacancyRisk')?.value;
      const impactOnOperation = this.impactOnOperationFormGroup?.get('impactOnOperation')?.value;
      const skillExperience = this.skillExpirienceFormGroup?.get('skillExpirience')?.value;
      const talentStrategy = this.talentStrategyFormGroup?.get('talentStrategy')?.value;
      // const average = (strategicImportance + revenueImpact + vacancyRisk + impactOnOperation + skillExpirience)/6

     // adding data to a form
     if (roleName && strategicImportance && revenueImpact && vacancyRisk && impactOnOperation && talentStrategy) {
      let data = new FormData();
      this.formData = {
        "roleName":roleName,
        "roleDescription":roleName,
        "averageRating":"3",
        "talentStrategy":talentStrategy,
        "currentState":"risky",
        "currentStrategy":talentStrategy,
        "strategicImportance":strategicImportance,
        "riskImpact":strategicImportance,
        "vacancyRisk":vacancyRisk,
        "impactOnOperation":vacancyRisk,
        "skillExperience":skillExperience
      }

      this.postSkillAssessment()
     }

      // Do something with the captured values
      console.log("data", this.formData);
    }
   
    postSkillAssessment(){
      this.http.createRoleAssessment(1,this.formData).subscribe(
        ((res) =>{
          console.log(res);
        }),
        ((err) => {
          console.error("error creating a role", err)
        }),
        (() =>{
          console.log("skill added successifully");
          
        })
      )
    }
}
