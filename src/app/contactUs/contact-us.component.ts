import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar/snackbar.service';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: any = FormGroup;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      phoneNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      comment: [null, [Validators.required]]
    });
  }

  handleContactUsSubmit() {
    this.ngxService.start()
    var formData = this.contactForm.value;
    var data = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      comment: formData.comment
    }
    this.ngxService.stop();
    this.snackbarService.openSnackBar("Your Contact Details Submit Successfully", "");
    console.log(data);
    this.contactForm.reset();
  }

  contactCloseAction() {
    this.router.navigate(['index']);
  }

}
