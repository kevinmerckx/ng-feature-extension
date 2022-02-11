import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  template: '<app-toolbar-item [badgeNumber]="badge$ | async">Code</app-toolbar-item>',
})
export class CodingToolbarItemComponent {
  badge$ = interval(1000).pipe(
    map(count => (1+count)%10),
  );
}
