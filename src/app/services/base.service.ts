import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private apiBaseUrl = environment.api.general.baseUrl;

  protected http: HttpClient;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }
  /**
   * Returns base api url
   */
  public get baseApiUrl(): any {
    return this.apiBaseUrl;
  }
  /**
   *
   * @param path
   * @param header
   * @returns
   */
  get(path: string, header?: any): Observable<any> {
    const headers = header;
    return this.http.get(`${this.baseApiUrl}${path}`, { headers });
  }

}
