import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";


@Component({
    selector: "app-login-form",
    templateUrl: "./login-Form.component.html",
    styleUrls: ["./login-Form.component.css"]
})
export class LoginFormComponent {

    loginForm: FormGroup = new FormGroup({
        'username': new FormControl(null),
        'password': new FormControl(null)
    });

    logedIn() {
        console.log(this.loginForm.value);
        sessionStorage.setItem('token','abcd@123123');
    }


}