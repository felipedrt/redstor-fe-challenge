import { Component, inject, Input } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'redsui-toolbar',
  standalone: true,
  imports: [MatToolbar, MatFormFieldModule, MatInputModule, MatSelectModule, TranslatePipe],
  templateUrl: './reds-toolbar.component.html'
})
export class RedsToolbarComponent {
  @Input() title = '';
  translate = inject(TranslateService);

  onSelectChange(event: Event) {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    this.translate.use(selectedLanguage);
  }
}
