import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonagemPage } from './personagem';

@NgModule({
  declarations: [
    PersonagemPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonagemPage),
  ],
})
export class PersonagemPageModule {}
