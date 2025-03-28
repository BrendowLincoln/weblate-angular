import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {

    const url = `https://localhost:44300/api/Translations/${lang}`;

    return this.http.get(url);
  }
}
