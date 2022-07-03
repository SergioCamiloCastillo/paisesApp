import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  translations!: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ codigoPais }) =>
          this.paisService.getPaisPorAlpha(codigoPais)
        ),
        tap(console.log)
      )
      .subscribe((response) => {
        this.pais = response[0];
        this.translations = Object.values(this.pais.translations);
        console.log(this.translations);
      });
  }
}
