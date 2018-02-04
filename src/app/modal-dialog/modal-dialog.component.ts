import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {

  lstEmployee:Employee [];

  constructor() { 
    this.lstEmployee = [{id:1,name:"samir"},{id:2,name:"jigna"},{id:3,name:"jordan"},{id:4,name:"michael"}];
  }

  ngOnInit() {
  }

}
