import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../building.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private buildingService: BuildingService) {}

  ngOnInit(): void {
    this.buildingService
      .loadScript('assets/js/script.js')
      .then(() => {
        // Traitement supplémentaire après le chargement du script si nécessaire
      })
      .catch((error) => {
        // Gérer les erreurs de chargement du script ici
      });
  }
}
