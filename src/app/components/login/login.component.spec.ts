import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { SessionService } from 'src/app/services/sessions.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [LoginService, NavigationService, SessionService, CookieService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login()', () => {
    it('should call the login service if the input is valid', () => {
        const loginService: LoginService = TestBed.get(LoginService);
        const observable: Observable<any> = Observable.create();

        component.username = 'itsame';
        component.password = 'mario';

        spyOn(loginService, 'doLogin').and.returnValue(observable);
        component.login();
        expect(loginService.doLogin).toHaveBeenCalled();
    });

    it('shouldnt call the login service if the input is invalid', () => {
        const loginService: LoginService = TestBed.get(LoginService);
        const observable: Observable<any> = Observable.create();

        component.username = '';
        component.password = '';

        spyOn(loginService, 'doLogin').and.returnValue(observable);
        component.login();
        expect(loginService.doLogin).not.toHaveBeenCalled();
    });
  });
});
