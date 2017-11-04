import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

export {StarWarsService} from './star-wars.service'

@NgModule({
  declarations: [],
  imports: [
    HttpModule
  ]
})

export class CoreModule {
}
