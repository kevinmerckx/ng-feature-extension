import { Type } from '@angular/core';
import { Observable } from 'rxjs';

export interface Extension {
  toolbarItem: Type<any>;
  route: Observable<string>;
}
