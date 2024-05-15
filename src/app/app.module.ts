import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MeetTeamComponent } from './components/meet-team/meet-team.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatIconModule } from '@angular/material/icon';

import { SwiperModule } from 'swiper/angular';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material/material.module';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { Header2Component } from './components/header2/header2.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MeetTeamComponent,
    BenefitsComponent,
    PartnersComponent,
    ContactUsComponent,
    HomeComponent,
    PrivacyComponent,
    QuestionsComponent,
    HeaderComponent,
    ServicesComponent,
    FooterComponent,
    TestimonialsComponent,
    Header2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    SwiperModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
