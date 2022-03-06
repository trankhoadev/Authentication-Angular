import { Component, OnInit } from '@angular/core';
/* Lib */
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss'],
  providers: [SocialAuthService]
})
export class FacebookLoginComponent implements OnInit {
  
  constructor(private authService: SocialAuthService) { 

  }

  ngOnInit(): void { 
    
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut() {
    this.authService.signOut
  }

  /* Google */
  refreshTokenGoogle() {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  refreshTokenFB() {
    this.authService.refreshAuthToken(FacebookLoginProvider.PROVIDER_ID)
  }

}
