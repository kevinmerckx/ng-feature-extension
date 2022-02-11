import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-item',
  templateUrl: './toolbar-item.component.html',
  styleUrls: ['./toolbar-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarItemComponent {
  @Input() badgeNumber: number | null = null;
}
