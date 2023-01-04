import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
  emailForm!: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  public sendEmail(e:any) {
    emailjs
      .send(
        'service_j0u0o8e',
        'template_gexv0cv',
        e,
        'ZWTCEQcyj6PrjuOhZ'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  valideButton() {
    if (this.emailForm.status === 'INVALID') {
      return true;
    }
    return false;
  }

  submitEmail() {
    const form = this.emailForm.getRawValue();
    this.sendEmail(form)
    console.log(form);
  }
}
