import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Row {
  skillName: string;
  businessPriority: number;
  scarcityParameter: number;
  developmentCost: number;
  marketFluidity: number;
  technologyRelevance: number;
  averageRating: number;
  skillAvailability: string;
  developmentStrategy: string;
}

@Component({
  selector: 'app-skills-assessment',
  templateUrl: './skills-assessment.component.html',
  styleUrls: ['./skills-assessment.component.scss']
})
export class SkillsAssessmentComponent {
  rows: Row[] = [];
  averageRating: number = 0;

  constructor() {
    // Add initial row
    this.addRow();
  }

  // Function to add a new row to the skills table
  addRow() {
    this.rows.push({
      skillName: '',
      businessPriority: 0,
      scarcityParameter: 0,
      developmentCost: 0,
      marketFluidity: 0,
      technologyRelevance: 0,
      averageRating: 0,
      skillAvailability: '',
      developmentStrategy: ''
    });
  }

  getSkillAvailabilityClass(skillAvailability: string): string {
    switch (skillAvailability) {
      case 'Red':
        return 'red';
      case 'Amber':
        return 'amber';
      case 'Green':
        return 'green';
      default:
        return '';
    }
  }

  // Function to calculate the average rating
  calculateAverage() {
    
    
    let sum = 0;
    this.rows.forEach(row => {
      console.log("business priority", row.skillName,"business priority", row.businessPriority, "market fluidity", row.marketFluidity,);
      sum += (row.businessPriority + row.scarcityParameter + row.developmentCost + row.marketFluidity + row.technologyRelevance) / 5;
    });
    this.averageRating = sum / this.rows.length;
    console.log('rating average', this.averageRating)
  }

  // Function to handle changes in input values and recalculate the average rating
  handleChange() {
    this.calculateAverage();
  }
}