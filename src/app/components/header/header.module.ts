import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    SharedModule,
    // Material Modules
    MatToolbarModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
