import { Component, Input } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-reds-toolbar',
  standalone: true,
  imports: [MatToolbar],
  templateUrl: './reds-toolbar.component.html'
})
export class RedsToolbarComponent {
  @Input() title = '';
}
