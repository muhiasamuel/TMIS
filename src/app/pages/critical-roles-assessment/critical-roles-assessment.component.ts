
import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

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
      data.append('rolename', roleName);
      data.append('strategicImportance',strategicImportance)
      data.append('revenueImpact',revenueImpact)
      data.append('vacancyRisk',vacancyRisk)
      data.append('impactOnOperation',impactOnOperation)
      data.append('talentStrategy',talentStrategy)
      console.log(data.getAll('roloname'));
     }

      // Do something with the captured values
      console.log('RoleAdded:',roleName, "strategicImportance:",strategicImportance,"revenueImpact:", revenueImpact);
    }
}
