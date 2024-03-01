import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from '../../view-dialog/view-dialog.component';


export interface IEmployeeData{
  id: number;
  pf: number;
  name: string;
  department: string;
  action: string;
}
const employeeData: IEmployeeData[] = [
  {id:1, pf:777, name:'Grace', department: 'Finance', action: 'View'},
  {id:2, pf:245, name:'Beth', department: 'Teller', action: 'View'},
  {id:3, pf:256, name:'Sam', department: 'Nursing', action: 'View'},
  {id:4, pf:678, name:'Steve', department: 'Teller', action: 'View'},
  {id:5, pf:687, name:'Maggy', department: 'Cash', action: 'View'},
  {id:6, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
]
@Component({
  selector: 'app-asess-my-team',
  templateUrl: './asess-my-team.component.html',
  styleUrl: './asess-my-team.component.scss'
})

export class AsessMyTeamComponent {

  constructor(private router: Router, public dialog: MatDialog) {}

  // method to open the dialog box
  openDialog(employee:any): void {
    this.dialog.open(ViewDialogComponent);
  }
  
  // dataSource: any = this.employeeData
  displayedColumns: any = ['id', 'pf', 'name', 'department', 'action']
  dataSource = new MatTableDataSource(employeeData);


    // method to handle button click
    goToAssessMyPotential(employeeId:number): void {
      console.log('Button clicked!')
      this.router.navigate(['/assess-my-potential', employeeId] ); //Navigate to AssessMyPotentialComponent
      
    }

  // Method to apply filters to the table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

    
}
