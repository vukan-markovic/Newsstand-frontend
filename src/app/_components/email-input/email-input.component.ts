import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent implements OnInit {
  emailForm: FormGroup;

  constructor(private authenticationService: AuthenticationService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.emailForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit() {

    this.authenticationService.resetPassword(this.emailForm.value.email).subscribe(
      data => {
        this.toastr.success(JSON.stringify(data), "Reset password");
        this.router.navigate(['/login']);
      }, message => {
        if (message.status != 200)
          this.toastr.error(message.error, "Reset password");
      }
    );
  }
}