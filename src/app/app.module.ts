import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NativeGeocoder } from "@ionic-native/native-geocoder/ngx";

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Keyboard } from '@ionic-native/keyboard/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
<<<<<<< HEAD
    Keyboard,
=======
>>>>>>> 19e902137ec10a7583262ac5fd27a8ee5558c786
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
