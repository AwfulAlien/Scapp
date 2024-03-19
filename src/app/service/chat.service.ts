import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { preference } from '../prefs/prefs/prefs.component';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  private nameSource = new BehaviorSubject<string>('');
  private preferencesSource = new BehaviorSubject<preference[]>([]);

  name = this.nameSource.asObservable();
  prefs = this.preferencesSource.asObservable();

  shareName(name: string) {
    this.nameSource.next(name);
  }

  sharePreferences(prefs : preference[]) {
    this.preferencesSource.next(prefs);
  }

}
