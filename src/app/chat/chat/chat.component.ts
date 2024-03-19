import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { preference } from '../../prefs/prefs/prefs.component';

interface Message {
  username: string,
  message: string,
  isSender: boolean,
  timestamp: any
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{

  username : string = ''
  message : string = '';
  preferences : preference[] = [];
  private stompClient: any;
  greetings: string[] = [];
  messages : Message[] = [];

  constructor(private chatService : ChatService) { }

  ngOnInit() {
    this.chatService.name.subscribe(name => {this.username = name});
    this.chatService.prefs.subscribe(prefs => {this.preferences = prefs})
    this.connect();
  }

  connect() {

    const socket = new SockJS('http://localhost:8080/testchat');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame: string) {
      console.log('Connected: ' + frame);
      _this.stompClient.subscribe('/start/initial', function(hello: { body: string; }){
        console.log(JSON.parse(hello.body));
        _this.showMessage(JSON.parse(hello.body));
      });
   });

  }

  sendMessage() {

    const chatMessage = {
      content: this.message,
      sender: this.username,
      type: 'CHAT'
  };

    this.stompClient.send(
      '/current/resume',
      {},
      JSON.stringify(chatMessage)
    );
    this.message = "";
  }

  showMessage(message: any) {
     const newMessage = {
      username: message.sender,
      message: message.content,
      isSender: this.username == message.sender,
      timestamp: new Date().toLocaleString()
    };
    this.messages.push(newMessage);
  }

}
