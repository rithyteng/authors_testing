import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddingComponent } from './adding/adding.component';

@NgModule({
  declarations: [
    AppComponent,
    AddingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
