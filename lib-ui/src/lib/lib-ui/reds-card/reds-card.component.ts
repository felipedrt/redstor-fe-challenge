import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'redsui-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, TranslatePipe],
  templateUrl: './reds-card.component.html',
  styleUrls: ['./reds-card.component.scss']
})
export class RedsCardComponent {
  @Input() classList = '';
  @Input() cardTitle = '';
  @Input() imgSrc = '';
  @Input() imgDescription = '';
  @Input() haveLikes = false;
  @Input() likes = 0;
  @Output() cardClick = new EventEmitter();

  onCardClick() {
    this.cardClick.emit();
  }
}
