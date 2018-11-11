import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HomePageModule } from './home/home.module';
import { Lvl1PageModule } from './lvl1/lvl1.module';
import { Lvl2PageModule } from './lvl2/lvl2.module';
import { Lvl2aPageModule } from './lvl2a/lvl2a.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule, IonicModule.forRoot(),
      HomePageModule,
      Lvl1PageModule,
      Lvl2PageModule,
      Lvl2aPageModule,
      AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
