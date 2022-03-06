import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Custom */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* angularx-social-login */
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
/* Components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacebookLoginComponent } from './components/facebook-login/facebook-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    FacebookLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '749875115169-8297lldsb1k9usp48bj2om73ddrg9pm8.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('132577342369038')
          }
        ],
        onError: (err:any) => {
          console.log(err);
        }
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
