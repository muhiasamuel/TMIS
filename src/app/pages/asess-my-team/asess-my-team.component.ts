import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { ViewDialogComponent } from './components/view-dialog/view-dialog.component';


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
  {id:7, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:8, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:9, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:10, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:11, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:12, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:13, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:14, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:15, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:16, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:17, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:18, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:19, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:20, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:21, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:22, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:23, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:24, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:25, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:26, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:6, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:6, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:6, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:6, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:6, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:6, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:6, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:6, pf:245, name:'Augustine', department: 'Manager', action: 'View'},
  {id:6, pf:245, name:'Augustine', department: 'Manager', action: 'View'},


]
@Component({
  selector: 'app-asess-my-team',
  templateUrl:'./asess-my-team.component.html',
  styleUrl: './asess-my-team.component.scss'
})

export class AsessMyTeamComponent {

  constructor(private router: Router, public dialog: MatDialog) {}
  @ViewChild(MatPaginator,{static: false})
   paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  showDialog(){
    this.dialog.open(DialogViewComponent,{
       width:'50%'})
  
  }

  // method to open the dialog box
  openDialog(employee:any): void {
    this.dialog.open(ViewDialogComponent,{
      width: '500px'
    });
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
