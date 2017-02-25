import {Injectable} from "@angular/core";
@Injectable()
export class UserService {
  private loggedIn: boolean;
  private username: string;

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(bool: boolean) {
    this.loggedIn = bool;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string) {
    this.username = username;
  }
}
