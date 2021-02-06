import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmagazinesComponent } from './pages/emagazines/emagazines.component';
import { VideosComponent } from './pages/videos/videos.component';
import { LivestreamComponent } from './pages/livestream/livestream.component';
import { EbooksComponent } from './pages/ebooks/ebooks.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'emagazines', component: EmagazinesComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'livestream', component: LivestreamComponent},
  {path: 'ebooks', component: EbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
