import { Component } from '@angular/core';
import { HistoriqueComponent } from "../historique/historique.component";

@Component({
    selector: 'header-text',
    standalone: true,
    templateUrl: './header-text.component.html',
    styleUrl: './header-text.component.scss',
    imports: [HistoriqueComponent]
})
export class HeaderTextComponent {

}
