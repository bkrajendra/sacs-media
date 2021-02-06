import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmagazinesComponent } from './pages/emagazines/emagazines.component';
import { VideosComponent } from './pages/videos/videos.component';
import { LivestreamComponent } from './pages/livestream/livestream.component';
import { EbooksComponent } from './pages/ebooks/ebooks.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ModalDetailsComponent } from './pages/modal-details/modal-details.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider
} from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmagazinesComponent,
    VideosComponent,
    LivestreamComponent,
    EbooksComponent,
    ModalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot(), 
    SocialLoginModule 
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1099085658914-qfhldednugb9gesmoke4rs00di4pe8v0.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
