import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { PimpPageComponent } from './pimp-page/pimp-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';

const routes: Routes = [
  { path: 'pimpmyrobot', component: PimpPageComponent },
  { path: 'panier', component: PanierComponent },
  { path: '', component: HomePageComponent },
  { path: 'films', component: MoviesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
