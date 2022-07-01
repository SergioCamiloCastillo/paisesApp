import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}
  buscar() {
    this.hayError = false;

    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        console.log(paises);
      },
      error: (err) => {
        console.log('Error');
        console.info(err);
      },
    });

    console.log(this.termino);
  }
}
