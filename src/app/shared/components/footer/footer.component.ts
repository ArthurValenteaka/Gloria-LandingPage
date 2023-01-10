import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ModalConfirmedComponent } from '../modal-confirmed/modal-confirmed.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
  emailForm!: FormGroup;
  loadingReq : boolean = false;

  constructor(public fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  public sendEmail(e:any) {
    this.loadingReq = true;
    emailjs
      .send(
        'service_j0u0o8e',
        'template_gexv0cv',
        e,
        'ZWTCEQcyj6PrjuOhZ'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.loadingReq = false;
          this.openModal(false, 'Entraremos em contato, obrigada!')
        },
        (error) => {
          this.loadingReq = false;
          this.openModal(true, 'Desculpe, não foi possível, tente novamente mais tarde!')
        },
      )
  }

  openModal(error:any, message:any){
    this.dialog.open(ModalConfirmedComponent,{
      data: {show: error, message}
    })
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
  }
}
