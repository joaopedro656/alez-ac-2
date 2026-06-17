import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IAtor } from '../model/IAtor';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss'],
      standalone: false
})
export class Tab3Page {

    constructor() {}

    listaAtores: IAtor[] = [
        {
            nome: 'Marlon Brando',
            Nascimento: '03/04/1924',
            filmes_feitos: 'O Poderoso Chefão, Apocalypse Now, O Último Tango em Paris',
        },
        {
            nome: 'Leonardo DiCaprio',
            Nascimento: '11/11/1974',
            filmes_feitos: 'Titanic, A Origem, O Lobo de Wall Street',
        },
        {
            nome: 'Morgan Freeman',
            Nascimento: '01/06/1937',
            filmes_feitos: 'Um Sonho de Liberdade, Invictus, Batman: O Cavaleiro das Trevas',
        },
        {
            nome: 'Scarlett Johansson',
            Nascimento: '22/11/1984',
            filmes_feitos: 'Lost in Translation, Vingadores, Lucy',
        }
    ];
    exibirAtor(ator: IAtor){
        const navigationExtras: NavigationExtras = {state:{paramAtores:ator}};
        this.router.navigate(['ator-detalhe'],navigationExtras);
      }
    
    
      async exibirAlertaFavorito(ator: IAtor){
        const alert = await this.alertController.create({
          
          header: 'Meus Favoritos',
          message: 'Deseja realmente favoritar o ator?',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () =>{
                ator.favorito=false;
              }
            }, {
              text: 'Sim, favoritar.',
              handler: () => {
                ator.favorito=true;
                this.apresentarToast();
              }
            }
          ]
        });
        await alert.present
      }
    
      async apresentarToast() {
        const toast = await this.toastController.create({
          message: 'Ator adicionada aos favoritos...',
          duration: 2000,
          color: 'success'
        });
        toast.present();
      }
}
