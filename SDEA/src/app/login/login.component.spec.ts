import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el formulario LOGIN', () => {
    expect(component).toBeTruthy();
  });

  it( 'Debe tener formularios invalidos', () => {

    const email = component.login_form.controls['email'];
    email.setValue( 'car_arca@hotmail.com' );
    expect( component.login_form.invalid ).toBeTrue();

  } );

  it( 'Debe tener formularios invalidos', () => {

    const email = component.login_form.controls['email'];
    email.setValue( 'car_arca' );

    const password = component.login_form.controls[ 'password' ];
    password.setValue( 'hola123' );

    expect( component.login_form.invalid ).toBeTrue();

  } );

  it ( 'Debe retornar formulario valido', () => {

    const email = component.login_form.controls['email'];
    email.setValue( 'car_arca@hotmail.com' );

    const password = component.login_form.controls[ 'password' ];
    password.setValue( 'hola123' );

    expect( component.login_form.invalid ).toBeFalse();

  } );

  it ( 'Debe retornar true cuando el form es valido y se da click al boton', () => {

    let email = component.login_form.controls['email'];
    email.setValue( 'car_arca@hotmail.com' );

    let password = component.login_form.controls[ 'password' ];
    password.setValue( 'hola123' );

    const btnLogin = fixture.debugElement.query( By.css('button.login_btn') );
    btnLogin.nativeElement.click();

    const testData = { user: 1 };
    expect(component.isCheck).toEqual(testData);

  } );
});
