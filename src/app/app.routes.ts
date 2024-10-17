import { NotfoundComponent } from './component/notfound/notfound.component';
import { AboutComponent } from './component/about/about.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { PortofolioComponent } from './component/portofolio/portofolio.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { StarComponent } from './component/star/star.component';

export const routes: Routes = [
{path:'', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'portofolio', component:PortofolioComponent},
{path:'contact', component:ContactComponent},
{path:'**', component:NotfoundComponent},
];
