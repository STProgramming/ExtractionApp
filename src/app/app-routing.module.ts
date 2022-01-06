import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractionComponent } from './extraction/extraction.component';

const routes: Routes = [  
  {path: '', pathMatch: 'full', redirectTo: 'extract'},
  {path: 'extract', pathMatch: 'full', component: ExtractionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
