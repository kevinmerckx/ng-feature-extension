import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { of } from 'rxjs';
import { Extension, FEATURE_EXTENSION } from '../../../shared';
import { PlanningToolbarItemComponent } from './planning-toolbar-item.component';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: FEATURE_EXTENSION,
      useValue: {
        toolbarItem: PlanningToolbarItemComponent,
        route: of('planning'),
      } as Extension,
      multi: true
    },
  ],
})
export class PlanningExtensionModule {}
