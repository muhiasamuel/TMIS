import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminDashboardComponent } from './layouts/admin-dashboard/admin-dashboard.component';
import { SelfAssessmentComponent } from './pages/self-assessment/self-assessment.component';
import { MyAssessmentsComponent } from './pages/self-assessment/my-assessments/my-assessments.component';

import { AsessMyTeamComponent } from './pages/asess-my-team/asess-my-team.component';
import { RolesComponent } from './pages/roles/roles.component';
import { SkillsAssessmentComponent } from './pages/skills-assessment/skills-assessment.component';
import { CriticalRolesAssessmentComponent } from './pages/critical-roles-assessment/critical-roles-assessment.component';
import { SuccessionPlanComponent } from './pages/succession-plan/succession-plan.component';
import { TalentMappingComponent } from './pages/talent-mapping/talent-mapping.component';
import { UsersComponent } from './pages/users/users.component';
import { AppraisalsComponent } from './pages/appraisals/appraisals.component';
import { UserComponent } from './pages/user/user.component';
import { MvpsComponent } from './pages/mvps/mvps.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { UserAssessmentComponent } from './pages/user-assessment/user-assessment.component';
import { AddPotentialDescriptorComponent } from './pages/add-potential-descriptor/add-potential-descriptor.component';
import { AddAssessmentQuestionsComponent } from './pages/add-assessment-questions/add-assessment-questions.component';
import { SkillsViewComponent } from './pages/skills-view/skills-view.component';
import { PotentialAttributesComponent } from './pages/potential-attributes/potential-attributes.component';
import { SingleAttributeComponent } from './pages/single-attribute/single-attribute.component';
import { AttributesComponent } from './pages/attributes/attributes.component';
import { ManagerAssessComponent } from './pages/managerAssessEmployee/manager-assess/manager-assess.component';
import { ManagerAssessEmployeeComponent } from './pages/managerAssessEmployee/manager-assess-employee/manager-assess-employee.component';


const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'dashboard',      component: DashboardComponent },
      { path: 'assess-my-potential',      component:ManagerAssessComponent },
      { path: 'potential-attributes',      component: PotentialAttributesComponent },
      { path: 'singleAtt/:id',      component: SingleAttributeComponent },
      { path: 'assQuests/:id', component:AttributesComponent},
      { path: 'assess-my-potential/:id',      component: SelfAssessmentComponent },
      { path: 'manager-assess/:id' , component: ManagerAssessEmployeeComponent },
      { path: 'assess-my-team',      component: ManagerAssessComponent },
      { path: 'roles',      component: RolesComponent },
      { path: 'critical-skills-assessment',      component: SkillsAssessmentComponent },
      { path: 'critical-roles-assessment',      component: CriticalRolesAssessmentComponent },
      { path: 'succession-plan',      component: SuccessionPlanComponent },
      { path: 'talent-mapping',      component: TalentMappingComponent },
      { path: 'users',      component: UsersComponent },
      { path: 'appraisals',      component: AppraisalsComponent },
      { path: 'user',      component: UserComponent },
      { path: 'mvps',      component: MvpsComponent },
      { path: 'user-assessment', component:UserAssessmentComponent},
      { path: 'add-attributes',      component: AddAssessmentQuestionsComponent },
      { path: 'skills-view',      component: SkillsViewComponent},
  ]},
  {
    path: '**',
    component: ErrorPageComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
