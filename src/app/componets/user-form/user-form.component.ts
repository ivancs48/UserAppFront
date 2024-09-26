import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { NgFor } from '@angular/common';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {

  @Input() user: User;

  @Output() newUserEventEmitter: EventEmitter<User> = new EventEmitter();

  constructor() {
    this.user = new User();
  }

  onSubmit(userFomr: NgForm): void {
    console.log(this.user);
    if(userFomr.value) {
      this.newUserEventEmitter.emit(this.user);
    }
    userFomr.reset();
    userFomr.resetForm();
  }

  onClear(userFomr: NgForm): void {
    this.user = new User();
    userFomr.reset();
    userFomr.resetForm();
  }

}
