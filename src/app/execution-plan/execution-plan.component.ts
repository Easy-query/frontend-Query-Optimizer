import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'execution-plan',
  standalone: true,
  imports: [],
  templateUrl: './execution-plan.component.html',
  styleUrl: './execution-plan.component.scss'
})
export class ExecutionPlanComponent  implements OnChanges {

  @Input() plan:any;
  @Input() plan2:any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['plan']) {
      // Vous pouvez accéder à la nouvelle valeur avec changes['myInput'].currentValue
      console.log('La valeur de plan a changé. Nouvelle valeur : ', changes['plan'].currentValue);

    }
  }




}
