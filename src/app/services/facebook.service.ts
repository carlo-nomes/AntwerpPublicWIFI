import {Injectable} from "@angular/core";

declare const FB: any;

@Injectable()
export class FacebookService {
  constructor() {
    FB.init({
      appId: '725173034323064',
      xfbml: true,
      version: 'v2.8'
    });
    FB.AppEvents.logPageView();
  }

  login(): Promise<any> {
    return new Promise(
      (resolve: (res: any) => void) => {
        FB.login(r => resolve(r), {scope: 'public_profile'});
      }
    );
  }

  logout(): Promise<any> {
    return new Promise(
      (resolve: (res: any) => void) => {
        FB.logout(r => resolve(r));
      }
    );
  }

  isLoggedIn(): Promise<boolean> {
    return new Promise(
      (resolve: (res: boolean) => void) => {
        FB.getLoginStatus(r => resolve(r.status === 'connected'));
      }
    );
  }

  getMe(fields: string): Promise<any> {
    return new Promise(
      (resolve: (res: any) => void) => {
        FB.api('/me', {fields: fields}, r => resolve(r));
      }
    );
  }

  getName(): Promise<string> {
    return this.getMe('').then(r => r ? r.name : null);
  }

  getFirstName(): Promise<string> {
    return this.getMe('first_name').then(r => r ? r.first_name : null);
  }
}
