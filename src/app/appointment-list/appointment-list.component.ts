import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule, NgFor,],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {


  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem('appointments')
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }
  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment);
      this.newAppointmentDate = new Date();
      this.newAppointmentTitle = "";

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
    else return;
  }

  deleteAppointment(appointment: Appointment) {
    const updateAppointment = this.appointments.filter(item => item !== appointment);
    this.appointments = updateAppointment;
    localStorage.setItem("appointments", JSON.stringify(this.appointments))

  }

}
