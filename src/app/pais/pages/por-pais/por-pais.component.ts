import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}
  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe({
      next: (paises) => {
        console.log(paises);
        this.paisesSugeridos = paises;
      },
      error: (err) => {
        console.log('Error');
        console.info(err);
        this.hayError = true;
        this.paisesSugeridos = [];
      },
    });
    console.log('los paises sugeridos son=>', this.paisesSugeridos);
  }
  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
  buscar(termino: string) {
    this.mostrarSugerencias = false;

    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      error: (err) => {
        console.log('Error');
        console.info(err);
        this.hayError = true;
        this.paises = [];
      },
    });

    console.log(this.termino);
  }
}
