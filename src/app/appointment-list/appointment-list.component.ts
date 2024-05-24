import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointment: Appointment[] = [];

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointment.push(newAppointment);
      this.newAppointmentDate = new Date();
      this.newAppointmentTitle = "";
      console.log(newAppointment);
    }
    else return;
  }

}
