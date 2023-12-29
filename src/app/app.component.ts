import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bookMyShow';
  isLoginView: boolean = true;
  isUserLoggedIn: boolean = false;
  registerObj: any = {
    UserId: 0,
    Name: '',
    Email: '',
    Password: '',
    ContactNo: '',
    Role: '',
  };

  loginObj: any = {
    Password: '',
    ContactNo: '',
  };
  loggedUserData: any;
  constructor(private http: HttpClient) {
    const localData = localStorage.getItem('eventUser');
    if (localData != null) {
      this.isUserLoggedIn = true;
      this.loggedUserData = JSON.parse(localData);
      console.log(this.loggedUserData);
    }
  }

  openLogin() {
    const model = document.getElementById('myModal');

    if (model != null) {
      model.style.display = 'block';
    }
  }
  openRegister() {
    const model = document.getElementById('myModal');

    if (model != null) {
      this.isLoginView = false;
      model.style.display = 'block';
    }
  }
  closeModel() {
    const model = document.getElementById('myModal');

    if (model != null) {
      this.isLoginView = true;
      model.style.display = 'none';
    }
  }

  onRegister() {
    console.log(this.registerObj);

    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/EventBooking/CreateUser',
        this.registerObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          console.log(res);

          alert('Registration Successful');
          this.closeModel();
        } else {
          alert(res.message);
        }
      });
  }

  onLogin() {
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/EventBooking/Login',
        this.loginObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          console.log(res);

          alert('Login Successful');
          localStorage.setItem('eventUser', JSON.stringify(res.data));
          this.closeModel();
          this.isUserLoggedIn = true;
        } else {
          alert(res.message);
        }
      });
  }

  onLogout() {
    localStorage.removeItem('eventUser');
    this.isUserLoggedIn = false;
    this.loggedUserData = undefined   
  }
}
