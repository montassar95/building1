import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut
  { path: 'home', component: HomeComponent }, // Route vers HomeComponent
  { path: 'about', component: AboutComponent }, // Route vers AboutComponent

  // Ajoutez d'autres routes ici au besoin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
