import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-assessment',
  templateUrl: './skills-assessment.component.html',
  styleUrls: ['./skills-assessment.component.scss']
})
export class SkillsAssessmentComponent {
  isLinear = true;
  skillForm: FormGroup;
  priorityForm: FormGroup;
  scarcityForm: FormGroup;
  costForm: FormGroup;
  fluidityForm: FormGroup;
  relevanceForm: FormGroup;
  availabilityForm: FormGroup;
  strategyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      name: ['', Validators.required]
    });

    this.priorityForm = this.fb.group({
      priority: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });

    this.scarcityForm = this.fb.group({
      scarcity: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });

    this.costForm = this.fb.group({
      cost: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });

    this.fluidityForm = this.fb.group({
      fluidity: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });

    this.relevanceForm = this.fb.group({
      relevance: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });

    this.availabilityForm = this.fb.group({
      availability: ['', Validators.required]
    });

    this.strategyForm = this.fb.group({
      strategy: ['', Validators.required]
    });
  }
}
   