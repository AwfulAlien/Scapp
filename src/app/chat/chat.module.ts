import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ChatRoutingModule,
    RouterModule
  ]
})
export class ChatModule { }
