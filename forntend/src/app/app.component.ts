import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, LoginComponent,RecuperarSenhaComponent]
})
export class AppComponent {
  title = 'forntend';
  
}
