import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrefsComponent } from './prefs/prefs.component';
import { MaterialModule } from '../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    PrefsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PrefsComponent
  ]
})
export class PrefsModule { }
