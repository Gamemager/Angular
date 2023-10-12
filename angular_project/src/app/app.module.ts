import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http'
=======
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

>>>>>>> 1cca8c69604ccb0fceeb1d77dcb624b4a238e957
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
<<<<<<< HEAD
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
=======
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule],
>>>>>>> 1cca8c69604ccb0fceeb1d77dcb624b4a238e957
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
