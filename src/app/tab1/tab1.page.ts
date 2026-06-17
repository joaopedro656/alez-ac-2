import { NavigationExtras, router } from '@angular/router';
import { component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor() {}

    listaFilmes: IFilme[] = [
        {
            nome: 'O Poderoso Chefão',
            lancamento: '15/04/1972',
            duracao: '2h 55m',
            classificacao: 9,
            cartaz: 'https://upload.wikimedia.org/wikipedia/pt/2/2b/The_Godfather.jpg',
            generos: ['Crime', 'Drama'],
            pagina: '/O_Poderoso_Chefão',
            favirito: true
        },
        {
            nome: 'O Senhor dos Anéis: O Retorno do Rei',
            lancamento: '20/12/2003',
            duracao: '2h 40m',
            classificacao: 8,
            cartaz: 'https://upload.wikimedia.org/wikipedia/pt/3/3b/The_Return_of_the_King.jpg',
            generos: ['Aventura', 'Fantasia'],
            pagina: '/O_Senhor_dos_Anéis_-_O_Retorno_do_Rei',
            favorito: false
        },
        {
            nome: 'Pulp Fiction: Tempo de Violência',
            lancamento: '07/02/1994',
            duracao: '2h 34m',
            classificacao: 8,
            cartaz: 'https://upload.wikimedia.org/wikipedia/pt/8/8b/Pulp_Fiction.jpg',
            generos: ['Crime', 'Drama'],
            pagina: '/Pulp_Fiction_-_Tempo_de_Violência',
            favorito:false
        }
    ];
}