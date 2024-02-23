import { Component } from '@angular/core';

@Component({
  selector: 'app-asess-my-team',
  templateUrl:'./asess-my-team.component.html',
  styleUrl: './asess-my-team.component.scss'
})
export class AsessMyTeamComponent {
  employees: any[]= [
    { PF: '0076', name: 'Grace', Department: 'nursing', Actions: 'View'},
    { PF: '0077', name: 'Beth', Department: 'anatomy', Actions: 'View'},
    { PF: '0078', name: 'Mary', Department: 'microbiology', Actions: 'View'},
    { PF: '0079', name: 'Muthui', Department: 'oncology', Actions: 'View'},
    { PF: '0074', name: 'Victor', Department: 'paedtric', Actions: 'View'},
    { PF: '0075', name: 'Dan', Department: 'dietetic', Actions: 'View'}
  ]
  toggleCard(): void{
    this.showCard = !this.showCard; 
  }

  showCard: boolean=false;
}
