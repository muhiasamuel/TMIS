import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

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
    data: any
    isEditable = false;
    selectedScore!: string;
    scores: number[] = [1, 2, 3, 4, 5 ];
    // Form Groups for each step with relevant controls
    roleNameFormGroup: FormGroup = new FormGroup({
      roleName: new FormControl(''),
    });
  
    strategicImportanceFormGroup: FormGroup = new FormGroup({
      strategicImportance: new FormControl(''),
    });

    revenueImpactFormGroup: FormGroup = new FormGroup({
      revenueImpact: new FormControl(''),
    });

    vacancyRiskFormGroup: FormGroup = new FormGroup({
      vacancyRisk: new FormControl(''),
    });
  
    impactOnOperationFormGroup: FormGroup = new FormGroup({
      impactOnOperation: new FormControl(''),
    });

    skillExpirienceFormGroup: FormGroup = new FormGroup({
      skillExpirience: new FormControl(''),
    });

    talentStrategyFormGroup: FormGroup = new FormGroup({
      talentStrategy: new FormControl(''),
    });

   async processValues() {
      const roleName = this.roleNameFormGroup?.get('roleName')?.value;
      const strategicImportance = this.strategicImportanceFormGroup?.get('strategicImportance')?.value;
      const revenueImpact = this.revenueImpactFormGroup?.get('revenueImpact')?.value;
      const vacancyRisk = this.vacancyRiskFormGroup?.get('vacancyRisk')?.value;
      const impactOnOperation = this.impactOnOperationFormGroup?.get('impactOnOperation')?.value;
      const skillExpirience = this.skillExpirienceFormGroup?.get('revenueImpact')?.value;
      const talentStrategy = this.talentStrategyFormGroup?.get('talentStrategy')?.value;
      const average = (strategicImportance + revenueImpact + vacancyRisk + impactOnOperation + skillExpirience)/6

     // adding data to a form
     if (roleName && strategicImportance && revenueImpact && vacancyRisk && impactOnOperation && talentStrategy) {
      let data = new FormData();
      this.data = {
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
        "skillExperience":skillExpirience
      }
      

      this.postSkillAssessment()
     }else{
      console.log('some values are missing!')
    
     }

      // Do something with the captured values
      console.log('RoleAdded:',roleName, "strategicImportance:",strategicImportance,"revenueImpact:", revenueImpact);
    }
    postSkillAssessment() {

    }
    
}
