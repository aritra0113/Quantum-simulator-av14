import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCustomComponent } from './my-custom-component/my-custom-component.component'; // Import it


 @Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet, MyCustomComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
 export class App {
  protected readonly title = signal('Quantum-simulator-av14');
  T = 'my-app';
}  ''
/* @Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCustomComponent], // Add it to imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'my-app';
}
 */