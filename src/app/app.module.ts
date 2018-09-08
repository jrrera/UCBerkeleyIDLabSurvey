import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { SurveyPage } from "../pages/survey/survey";
import { ItemDetailsPage } from "../pages/item-details/item-details";
import { ListPage } from "../pages/list/list";
import { SurveyComponent } from "./survey.component";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Geolocation } from "@ionic-native/geolocation";

@NgModule({
  declarations: [
    MyApp,
    SurveyPage,
    ItemDetailsPage,
    ListPage,
    SurveyComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, SurveyPage, ItemDetailsPage, ListPage],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
