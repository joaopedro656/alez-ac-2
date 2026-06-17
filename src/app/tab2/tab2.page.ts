import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public router : Router , private alertController: AlertController, private toastController: ToastController) {}

  listaSeries: ISerie[] = [
    {
      nome: 'The Walking Dead',
      anos: '2010-2023',
      episodios: '177',
      classificacao: 7,
      cartaz: '.',
      generos: ['Terror', 'Drama', 'Apocalipse'],
      pagina: '/twd',
      favorito: false
    },
    {
      nome: 'One Piece',
      anos: '1999-',
      episodios: '1060',
      classificacao: 10,
      cartaz: '.',
      generos: ['Ação', 'Aventura', 'Fantasia', 'Comédia'],
      pagina: '/op',
      favorito: false
    }
  ];
  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSeries:serie}};
    this.router.navigate(['serie-detalhe'],navigationExtras);
  }


  async exibirAlertaFavorito(serie: ISerie){
    const alert = await this.alertController.create({
      
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}