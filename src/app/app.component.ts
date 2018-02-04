import { Component } from '@angular/core';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){
    localStorage.setItem("tag","Conflict");
    
    alert(localStorage.getItem("tag"));
  }
}
