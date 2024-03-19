import { Component, inject } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChatService } from '../../service/chat.service';

export interface preference {
  pref: string;
}

@Component({
  selector: 'app-prefs',
  templateUrl: './prefs.component.html',
  styleUrl: './prefs.component.css'
})

export class PrefsComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  username = '';
  preferences: preference[] = [];

  constructor(private chatService: ChatService) {

  }

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.preferences.push({ pref: value });
    }

    event.chipInput!.clear();
  }

  remove(preference: preference): void {
    const index = this.preferences.indexOf(preference);

    if (index >= 0) {
      this.preferences.splice(index, 1);

      this.announcer.announce(`Removed ${preference}`);
    }
  }

  edit(preference: preference, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(preference);
      return;
    }


    const index = this.preferences.indexOf(preference);
    if (index >= 0) {
      this.preferences[index].pref = value;
    }
  }

  clickMe() {
    this.chatService.shareName(this.username);
    this.chatService.sharePreferences(this.preferences);
    this.preferences.forEach(pp => console.log(pp));
  }
}
