import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

}

export function getClientSettings(): UserManagerSettings {
  return {
      authority: 'http://localhost:5555/',
      client_id: 'angular_spa',
      redirect_uri: 'http://localhost:4200/auth-callback',
      post_logout_redirect_uri: 'http://localhost:4200/',
      response_type:"id_token token",
      scope:"openid profile api1",
      filterProtocolClaims: true,
      loadUserInfo: true
  };
}
