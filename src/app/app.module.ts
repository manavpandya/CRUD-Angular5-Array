import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LimittoComponent } from './limitto/limitto.component';
import { SliceComponent } from './slice/slice.component';
import { routing } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    LimittoComponent,
    SliceComponent
  ],
  imports: [
    BrowserModule,FormsModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
