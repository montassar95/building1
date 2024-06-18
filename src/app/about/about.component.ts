import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../building.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
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
