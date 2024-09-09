import { Component } from '@angular/core';
import { ContactosListaComponent } from "../contactanos-lista/contactos-lista.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ContactosListaComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
