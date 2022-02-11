import { Component, Inject } from '@angular/core';
import { Extension, FEATURE_EXTENSION } from '../shared';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  constructor(@Inject(FEATURE_EXTENSION) public extensions: Extension[]) {}
}
