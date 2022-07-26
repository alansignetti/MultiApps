import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiceComponent } from './dice/dice/dice.component';
import { HomeComponent } from './home/home.component';
import { PianoComponent } from './piano/piano/piano.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'piano', component: PianoComponent },
  { path: 'dice', component: DiceComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
