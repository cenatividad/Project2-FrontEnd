import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { SessionService } from './services/sessions.service';
import { FormsModule } from '@angular/forms';
import { SignupLoginComponent } from './components/signup-login/signup-login.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ViewInvitationsComponent } from './components/view-invitations/view-invitations.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { NavigationService } from './services/navigation.service';
import { ProjectService } from './services/project.service';
import { ProjectComponent } from './components/project/project.component';
import { InvitationService } from './services/invitation.service';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { UserService } from './services/user.service';
import { CreateStoryComponent } from './components/create-story/create-story.component';
import { StoryService } from './services/story.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SignupComponent,
    SignupLoginComponent,
    UserProjectsComponent,
    NewProjectComponent,
    ViewInvitationsComponent,
    ProjectComponent,
    StoryCardComponent,
    StoryListComponent,
    CreateStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, LoginService, SignupService, SessionService, CookieService, NavigationService, ProjectService,
    InvitationService, StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
