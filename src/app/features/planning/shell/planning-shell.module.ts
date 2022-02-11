import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanningComponent } from './planning.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlanningComponent,
      },
    ]),
  ],
})
export class PlanningShellModule {}
