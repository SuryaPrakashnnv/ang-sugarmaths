import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FantasygiftsComponent } from './components/fantasygifts/fantasygifts.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MediaComponent } from './components/media/media.component';
import { MembersComponent } from './components/members/members.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ReactionsComponent } from './components/reactions/reactions.component';
import { ScientificbasisComponent } from './components/scientificbasis/scientificbasis.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'scientificbasis', component: ScientificbasisComponent },
  { path: 'members', component: MembersComponent },
  { path: 'fantasygifts', component: FantasygiftsComponent },
  { path: 'reactions', component: ReactionsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'contactus', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
