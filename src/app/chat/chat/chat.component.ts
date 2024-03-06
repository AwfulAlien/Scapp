import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  name$: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.name$ = this.dataService.currentName;
  }
}
