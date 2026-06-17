import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IAtor } from '../model/IAtor';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss'],
      standalone: false
})
export class Tab3Page {
    constructor(public router : Router , private alertController: AlertController, private toastController: ToastController) {}
    

    listaAtores: IAtor[] = [
        {
            nome: 'Marlon Brando',
            nascimento: '03/04/1924',
            filmes_feitos: 'O Poderoso Chefão, Apocalypse Now, O Último Tango em Paris',
            favorito: true,
            cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_face/eEHCjqKMWSvQU4bmwhLMsg4RtEr.jpg'
        },
        {
            nome: 'Leonardo DiCaprio',
            nascimento: '11/11/1974',
            filmes_feitos: 'Titanic, A Origem, O Lobo de Wall Street',
            favorito: false,
            cartaz:'https://media.themoviedb.org/t/p/w300_and_h450_face/mkdRcVIQl4WZhDf1vXKWTD7HZrZ.jpg'
        },
        {
            nome: 'Morgan Freeman',
            nascimento: '01/06/1937',
            filmes_feitos: 'Um Sonho de Liberdade, Invictus, Batman: O Cavaleiro das Trevas',
            favorito: false,
            cartaz: 'https://media.themoviedb.org/t/p/w300_and_h450_face/1ahENoyEgKSbRUd0IsydIff7rt1.jpg'
        },
        {
            nome: 'Scarlett Johansson',
            nascimento: '22/11/1984',
            filmes_feitos: 'Lost in Translation, Vingadores, Lucy',
            favorito: false,
            cartaz: "https://media.themoviedb.org/t/p/w300_and_h450_face/druW5adKddizHNSoPbI0q7Mvn0K.jpg"
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
        await alert.present()
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
