import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-custom-component',
  templateUrl: './my-custom-component.component.html', // Use './' for local file
  standalone: true,
  imports: [CdkDrag],
})
export class MyCustomComponent {} // Renamed class