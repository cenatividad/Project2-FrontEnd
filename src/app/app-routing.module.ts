import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { SignupLoginComponent } from './components/signup-login/signup-login.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ViewInvitationsComponent } from './components/view-invitations/view-invitations.component';
import { ProjectComponent } from './components/project/project.component'

const routes: Routes = [
  {
    path: '',
    component: SignupLoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'user-projects',
        component: UserProjectsComponent
      }, {
        path: 'new-project',
        component: NewProjectComponent
      }, {
        path: 'view-invitations',
        component: ViewInvitationsComponent
       }, {
        path: `project`,
        component: ProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
