import { Component } from '@angular/core';


@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {
  Nombre: string | undefined;
  email: string | undefined;
  Mensaje : string | undefined;

  constructor() { }

  onSubmit() {
    console.log('Form submitted!');
  }
}

