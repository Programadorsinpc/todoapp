import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  name = signal('Nicolas')

  welcome = 'Bienvenido :)'

  /*tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Tarea 1',
      completed: true,
    },
    {
      id: Date.now(),
      title: 'Tarea 2',
      completed: false,
    },
  ]);*/

  tasks = signal(['Registrar tareas','Ejecutar proyecto']);

  person = signal(
    {
      name: 'Nicolas',
      age: 18,
      avatar: 'https://w3schools.com/howto/img_avatar.png'
    }
  )

  colorCtrl = new FormControl()
  widthCtrl = new FormControl('50',{
    nonNullable: true
  })
  nameCtrl = new FormControl('nicolas',{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  })

  constructor() {
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  changeHandler(event: Event) {

  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement
    const newValue = input.value
    this.person.update((prevState) => {
      return {
        ...prevState,
        age: parseInt(newValue, 10)
      }
    })
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement
    const newValue = input.value
    this.person.update((prevState) => {
      return {
        ...prevState,
        name: newValue
      }
    })
  }
}
