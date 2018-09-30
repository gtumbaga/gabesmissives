import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { AlertModule } from 'ngx-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageFrontComponent } from './page-front/page-front.component';

@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    BlogpostComponent,
    FooterComponent,
    PageAboutComponent,
    PageContactComponent,
    PageFrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
