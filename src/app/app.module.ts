import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FantasygiftsComponent } from './components/fantasygifts/fantasygifts.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MediaComponent } from './components/media/media.component';
import { MembersComponent } from './components/members/members.component';
import { ReactionsComponent } from './components/reactions/reactions.component';
import { ScientificbasisComponent } from './components/scientificbasis/scientificbasis.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ContactService } from './services/contact.service';


import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    FantasygiftsComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    MediaComponent,
    MembersComponent,
    ReactionsComponent,
    ScientificbasisComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
