import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { of } from 'rxjs';
import { Extension, FEATURE_EXTENSION, ToolbarItemModule } from '../../../shared';
import { CodingToolbarItemComponent } from './coding-toolbar-item.component';

@NgModule({
  imports: [
    CommonModule,
    ToolbarItemModule
  ],
  declarations: [
    CodingToolbarItemComponent,
  ],
  providers: [
    {
      provide: FEATURE_EXTENSION,
      useValue: {
        toolbarItem: CodingToolbarItemComponent,
        route: of('coding'),
      } as Extension,
      multi: true
    },
  ],
})
export class CodingExtensionModule {}
