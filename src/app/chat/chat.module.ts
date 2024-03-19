import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ChatRoutingModule,
    RouterModule,
    HttpClientModule
  ]
})
export class ChatModule { }
