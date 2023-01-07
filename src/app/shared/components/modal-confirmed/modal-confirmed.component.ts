import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-confirmed',
  templateUrl: './modal-confirmed.component.html',
  styleUrls: ['./modal-confirmed.component.scss'],
})
export class ModalConfirmedComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalConfirmedComponent>
  ) {}

  ngOnInit(): void {
  }

}
