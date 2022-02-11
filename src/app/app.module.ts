import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CodingExtensionModule } from './features/coding';
import { PlanningExtensionModule } from './features/planning';
import { HelloComponent } from './hello.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'planning',
        loadChildren: () =>
          import('./features/planning/shell/planning-shell.module').then(
            (m) => m.PlanningShellModule
          ),
      },
      {
        path: 'coding',
        loadChildren: () =>
          import('./features/coding/shell/coding-shell.module').then(
            (m) => m.CodingShellModule
          ),
      },
      {
        path: '',
        component: HelloComponent,
      },
    ]),
    PlanningExtensionModule,
    CodingExtensionModule
  ],
  declarations: [AppComponent, ToolbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
