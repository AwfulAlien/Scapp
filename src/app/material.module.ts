import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    MatInputModule
  ]
})
export class MaterialModule { }
