import { Router } from '@angular/router';
import { IFilme } from '../model/IFilme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-filme-detalhe',
    templateUrl: './filme-detalhe.page.html',
    styleUrls: ['/filme-detalhe.page.scss'],
      standalone: false
})
export class FilmeDetalhePage implements OnInit {
  filme: any;

    constructor(private router: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        const getNav = this.router.getCurrentNavigation();
        if (getNav?.extras.states) {
          this.filme = getNav.extras.state['paramFilme']; 
        }
      })
    }
}