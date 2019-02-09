import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
 { path: '', redirectTo: 'landing-page',  pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'testimonials', component: TestimonialComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
