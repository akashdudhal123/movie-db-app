import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
    selector: "app-login-form",
    templateUrl: "./login-Form.component.html",
    styleUrls: ["./login-Form.component.css"]
})
export class LoginFormComponent {

    constructor(private router: Router) { }

    loginForm: FormGroup = new FormGroup({
        'username': new FormControl(null),
        'password': new FormControl(null)
    });

    logedIn() {
        console.log(this.loginForm.value);
        const accessTokan: string | null = sessionStorage.getItem('token');
        console.log(accessTokan);
        if(accessTokan){
            this.router.navigateByUrl('/home')
        }
        
    }


}