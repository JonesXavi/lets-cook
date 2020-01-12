import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    SigninComponent,
  ],
  imports: [
    FormsModule
  ]
})
export class AuthModule {}
