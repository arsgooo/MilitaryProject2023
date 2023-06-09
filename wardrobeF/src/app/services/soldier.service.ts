import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Soldier } from '../interfaces/soldier';

@Injectable({
  providedIn: 'root',
})
export class SoldierService {
  list = new BehaviorSubject<Soldier[]>([]);

  url: string = 'http://localhost:8080/${path}';

  constructor(private http: HttpClient) {}

  getSoldiers(): Observable<Soldier[]> {
    return this.http.get<Soldier[]>(this.url.replace('{path}', 'cards'));
  }

  postSoldier(Soldier: Soldier): Observable<Soldier[]> {
    return this.http.post<Soldier[]>(
      this.url.replace('{path}', 'add'),
      Soldier
    );
  }

  putSoldier(Soldier: Soldier): Observable<Soldier[]> {
    return this.http.put<Soldier[]>(
      this.url.replace('{path}', 'update') + `/${Soldier.id}`,
      Soldier
    );
  }

  deleteSoldier(Soldier: Soldier): Observable<Soldier[]> {
    return this.http.delete<Soldier[]>(
      this.url.replace('{path}', 'delete') + `/${Soldier.id}`
    );
  }

  setList(list: Soldier[]) {
    this.list.next(list);
  }
}
