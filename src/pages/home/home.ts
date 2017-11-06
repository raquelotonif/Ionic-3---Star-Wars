import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PersonagemPage} from '../personagem/personagem';
import {StarWarsService} from "../../core/star-wars.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  personagens: any;

  constructor(public navCtrl: NavController, public _starWarsService: StarWarsService) {
  }

  ngOnInit() {
    this.loadPersonagens();
  }

  loadPersonagens(): any {
    this._starWarsService.getAllPersonagens()
      .subscribe(personagens => {
        this.personagens = personagens;
        console.log(this.personagens);
      });
  }

  pushPage(personagem){
    this.navCtrl.push(PersonagemPage, {personagem: personagem});
  }
}
