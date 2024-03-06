import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
    private nameSource = new BehaviorSubject<string>('');
    private prefsSource = new BehaviorSubject<string[]>(['']);
currentName = this.nameSource.asObservable();
currentprefs= this.prefsSource.asObservable();

changeName(name: string) {
    this.nameSource.next(name);
  }
  changeprefs(prefs: string[]) {
    this.prefsSource.next(prefs);
  }   

}
