import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-termino',
  templateUrl: './heroe-termino.component.html',
})
export class HeroeTerminoComponent implements OnInit {
  
  heroes:Heroe[] = [];
  termino:string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService:HeroesService,
              private router:Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>  {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes( params.termino );
      console.log(this.heroes);
    });
  }

  verHeroe( idx:number){
    this.router.navigate( ['/heroe',  idx ]);
  }

}
