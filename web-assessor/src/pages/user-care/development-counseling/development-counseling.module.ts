import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {DevelopmentCounselingComponent} from './development-counseling.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DevelopmentCounselingComponent
      },

    ])
  ],
  declarations: [DevelopmentCounselingComponent]
})
export class DevelopmentCounselingModule { }
