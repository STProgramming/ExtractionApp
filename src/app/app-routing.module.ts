import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractionComponent } from './extraction/extraction.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'extract', pathMatch: 'full', component: ExtractionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
