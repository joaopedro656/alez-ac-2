import { NavigationExtras } from '@angular/router';
import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public router: Router) {}

  listaSeries: ISerie[] = [
    {
      nome: 'The Walking Dead',
      anos: '2010-2023',
      episodios: '177';
      classificacao: '18';
      cartaz: '.';
      generos: ['Terror', 'Drama', 'Apocalipse'],
      pagina?: '/twd',
      favorito: 'false'
    },
    {
      nome: 'One Piece',
      anos: '1999-',
      episodios: '1060';
      classificacao: '12';
      cartaz: '.';
      generos: ['Ação', 'Aventura', 'Fantasia', 'Comédia'],
      pagina?: '/op',
      favorito: 'false'
    }
  ];
  exibirSerie(serie: ISerie){
    const navigation
  }
}
