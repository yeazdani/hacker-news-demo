import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoryModule } from '../story/story.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    StoryModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
