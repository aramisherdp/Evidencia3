import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetTeamComponent } from './components/meet-team/meet-team.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
    // { path: '', component: HomeComponent}
    // { path: 'Home', component: Home}
    {path: 'Home', component: HomeComponent},
    { path: 'Team', component: MeetTeamComponent},
    {path: 'Services', component: ServicesComponent},
    { path: 'Benefits', component: BenefitsComponent},
    { path: 'Faq' , component: QuestionsComponent},
    { path: 'Partnerships', component: PartnersComponent},
    { path: 'Contact Us', component: ContactUsComponent},
    { path: '**', redirectTo: 'Home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
