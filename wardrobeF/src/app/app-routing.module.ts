import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AddSoldierPageComponent } from './pages/add-soldier-page/add-soldier-page.component';
import { UpdateSoldierPageComponent } from './pages/update-soldier-page/update-soldier-page.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { FeedbackPageComponent } from './pages/feedback-page/feedback-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'add', component: AddSoldierPageComponent },
  { path: 'update', component: UpdateSoldierPageComponent },
  { path: 'request', component: RequestPageComponent },
  { path: 'cards', component: CardsPageComponent },
  { path: 'feedback', component: FeedbackPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
