import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddSoldierPageComponent } from './pages/add-soldier-page/add-soldier-page.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSoldierPageComponent } from './pages/update-soldier-page/update-soldier-page.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { FeedbackPageComponent } from './pages/feedback-page/feedback-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavigationComponent,
    AddSoldierPageComponent,
    UpdateSoldierPageComponent,
    RequestPageComponent,
    CardsPageComponent,
    FeedbackPageComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
