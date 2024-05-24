import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  appointment: Appointment = {
    id: 1,
    title: 'hai long',
    date: new Date('2024-05-25')
  }
}
