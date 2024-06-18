import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';  // Veendu, et see rida on olemas
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';  // Vajalik ngModel jaoks

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Veendu, et see rida on olemas
    HttpClientModule,
    FormsModule  // Vajalik ngModel jaoks
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }