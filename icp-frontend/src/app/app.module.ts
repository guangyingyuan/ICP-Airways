import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { RouterModule } from '@angular/router';
import { Provider } from './provider/provider';
import { LoginService } from './login/login.component.service';
import { SignupService } from './signup/signup.component.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HistoryComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING,
    RouterModule
  ],
  providers: [Provider,SignupService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
