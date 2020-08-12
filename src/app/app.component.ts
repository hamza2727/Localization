import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  default;

  constructor(public translate: TranslateService) {}
  ngOnInit(): void {
    debugger;
    this.default = localStorage.getItem('default');
    if (this.default == null) {
      localStorage.setItem('default', 'en');
      this.translate.setDefaultLang('en');
    } else {
      this.translate.setDefaultLang(this.default);
    }

    this.translate.addLangs(['en', 'fr', 're']);
  }

  selectLang(value) {
    debugger;
    localStorage.setItem('default', value);
    this.translate.use(value);
  }
}
