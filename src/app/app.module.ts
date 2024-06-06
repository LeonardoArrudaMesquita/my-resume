import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessionalSummaryComponent } from './components/professional-summary/professional-summary.component'
import { SubtitleDirective } from './directives/subtitle/subtitle.directive';
import { HeaderComponent } from './components/header/header.component';
import { BadgeComponent } from './components/badge/badge.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { MainTitleDirective } from './directives/main-title/main-title.directive';
import { CertificationComponent } from './components/certifications/certifications.component';
import { LanguagesComponent } from './components/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfessionalSummaryComponent,
    BadgeComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationComponent,
    LanguagesComponent,
    MainTitleDirective,
    SubtitleDirective,
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
