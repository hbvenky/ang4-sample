import { Component, OnDestroy } from '@angular/core';
import { AuthService } from "angular2-social-login";

@Component({
  selector: 'my-app',
  template: `<div class="main-div"><h1>Social login</h1>{{status}}
              <button (click)="signIn('google')"><img src="/assets/images/gplus.png"></button>
              <button (click)="signIn('facebook')"><img src="/assets/images/facebook.png"></button>
              <span>--</span>
              <button (click)="logout()"><img src="/assets/images/logout.png"></button>
              </div>
              <div *ngIf="user" class="user-div">
                <table>
                  <tr>
                    <td class='label'>Name:</td>
                    <td>{{user.name}}</td>
                  </tr>
                  <tr>
                    <td class='label'>Email:</td>
                    <td>{{user.email}}</td>
                  </tr>
                  <tr>
                    <td class='label'>UID:</td>
                    <td>{{user.uid}}</td>
                  </tr>
                  <tr>
                    <td class='label'>Provider:</td>
                    <td>{{user.provider}}</td>
                  </tr>
                  <tr>
                    <td class='label'>Image:</td>
                    <td><img src="{{user.image}}"></td>
                  </tr>
                </table>
              </div>
              `,
  styles: [`
    h1, span{color: #10c8ff;}
    .main-div{border: 1px solid grey; margin: 15px 0 0 36%; width: 300px; padding: 0 20px 20px;background: #000;box-shadow: 5px 8px #10c8ff;}
    button{cursor: pointer;}
    .user-div{width: 300px; height: auto; border: 1px solid grey;margin: 15px 0 0 36%;}
    .label{color: #3e40c1;}
  `]

})
export class AppComponent implements OnDestroy {
  public user;
  sub: any;
  constructor(public _auth: AuthService){ }  
  signIn(provider){    
    this.sub = this._auth.login(provider).subscribe(
      (data) => {        
        this.user=data;
      }
    )
  }

  logout(){    
    this._auth.logout().subscribe(
      (data)=>{
        this.user=null;
        alert("Loout successfully");
      }
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}