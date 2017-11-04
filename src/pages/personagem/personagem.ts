import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-personagem',
  templateUrl: 'personagem.html',
})

export class PersonagemPage {
  personagem: {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personagem = this.navParams.get('personagem');
  }

  ionViewDidLoad() {
  }

}
