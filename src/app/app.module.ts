import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonagemPage } from '../pages/personagem/personagem';
import { CoreModule, StarWarsService } from '../core/core.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonagemPage
  ],
  imports: [
    BrowserModule,
    CoreModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonagemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StarWarsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
