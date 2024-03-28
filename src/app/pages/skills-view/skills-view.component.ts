import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-view',
  templateUrl: './skills-view.component.html',
  styleUrl: './skills-view.component.scss'
})
export class SkillsViewComponent {
  

  skills:any[]=[
    {id:101, skillName: 'Software Development' ,critical:'high', Image:"/assets/logo.png"},
    {id:102, skillName: 'Accounting', critical:'high', Image:"/assets/logo.png"},
    {id:103, skillName: 'Data Analysis', critical:'medium', Image:"/assets/logo.png"},
    {id:104, skillName: 'Managerial skill', critical:'high', Image:"/assets/logo.png"},
    {id:105, skillName: 'Human resource', critical:'low', Image:"/assets/logo.png"},
    {id:106, skillName: 'Customer services', critical:'low', Image:"/assets/logo.png"},
    {id:107, skillName: 'Communication', critical:'high', Image:"/assets/logo.png"},
    {id:108, skillName: 'Marketing', critical:'medium', Image:"/assets/logo.png"},
    {id:109, skillName: 'Reading', critical:'low', Image:"/assets/logo.png"},
  ]

}
