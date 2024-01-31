import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConsultComponent } from './main/consult/consult.component';
import { PhysicianComponent } from './main/physician/physician.component';

const routes: Routes = [
  { path: '', component: ConsultComponent },
  { path: 'consult', component: ConsultComponent },
  { path: 'physician', component: PhysicianComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
