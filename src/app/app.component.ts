import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'POC_I18N_TRANSLATE';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.translate.use(value);
  }
}
