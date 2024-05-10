import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  name = signal('Nicolas')

  person = signal(
    {
      name: 'Nicolas',
      age: 18,
      avatar: 'https://w3schools.com/howto/img_avatar.png'
    }
  )

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
}
