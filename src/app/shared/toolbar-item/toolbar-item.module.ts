import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarItemComponent } from './components/toolbar-item/toolbar-item.component';



@NgModule({
  declarations: [
    ToolbarItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarItemComponent
  ]
})
export class ToolbarItemModule { }
