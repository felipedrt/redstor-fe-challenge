import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { IPhoto } from '@app/interfaces';

@Component({
  selector: 'redsui-card-photo',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, TranslatePipe],
  templateUrl: './reds-card-photo.component.html',
  styleUrl: './reds-card-photo.component.scss'
})
export class RedsCardPhotoComponent {
  @Input() photo!: IPhoto;
  @Output() cardClick = new EventEmitter();

  onCardClick() {
    this.cardClick.emit();
  }
}
