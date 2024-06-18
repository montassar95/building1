import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../building.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
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
