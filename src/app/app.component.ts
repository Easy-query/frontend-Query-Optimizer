import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BordComponent } from './bord/bord.component';
import { HeaderTextComponent } from "./header-text/header-text.component";
import { HistoriqueComponent } from "./historique/historique.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, BordComponent, HeaderTextComponent, HistoriqueComponent]
})
export class AppComponent {
  title = 'optimisationSQL';
}
