import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TranslatePipe]
})
export class HomeComponent implements OnInit {

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('pt');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('pt');
}

  ngOnInit(): void {
  }

  public createNewTransalte() {
    
  }

}
