import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AppService extends BaseService {
  constructor(
    injector: Injector,
  ) {
    super(injector);
  }
  /**
   * Returns all top sotry ids
   * @returns
   */
  getAllTopStoryIds(): Observable<any> {
    const path = `/v0/topstories.json?print=pretty`;
    return this.get(path);
  }
  /**
   * Returns a story by id
   * @param id
   * @returns
   */
  getStoryById(id: number): Observable<any> {
    const path = `/v0/item/${id}.json?print=pretty`;
    return this.get(path);
  }
  /**
   * Returns a comment by its id
   * @param id
   * @returns
   */
  getCommentById(id: number): Observable<any> {
    const path = `/v0/item/${id}.json?print=pretty`;
    return this.get(path);
  }
}
