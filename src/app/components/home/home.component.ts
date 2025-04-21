import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ServicosComponent } from "../servicos/servicos.component";
import { AboutComponent } from "../about/about.component";
import { ContactsComponent } from "../contacts/contacts.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ServicosComponent, AboutComponent, ContactsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
