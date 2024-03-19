import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  @Input()
  username: string = '';

  @Input()
  message: string = '';

  @Input()
  isSender: boolean = true;

  @Input()
  timestamp: any = '';

}
