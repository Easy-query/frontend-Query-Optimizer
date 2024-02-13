import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BordComponent } from './bord/bord.component';
import { HeaderTextComponent } from "./header-text/header-text.component";
import { HistoriqueComponent } from "./historique/historique.component";
import { OptService } from './opt.service';
import { FormsModule } from '@angular/forms';
import { ExecutionPlanComponent } from "./execution-plan/execution-plan.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, BordComponent, HeaderTextComponent, HistoriqueComponent, FormsModule, ExecutionPlanComponent]
})
export class AppComponent {
  title = 'optimisationSQL';
  
  constructor(private optService:OptService){}
  
   query:string ="";
   queryOpt:any;
   array:any[]= [];

   
  execution_plan:any;

   getResult(){
   const obj = {
    "query":   this.query
    }

   

    this.optService.getRequestOpt(obj).subscribe(
       {
         next:(res)=>{
       
          this.queryOpt=res.queries[0];
          this.execution_plan=res.execution_plan_for_original;
          this.array.push(this.queryOpt);
          console.log("clickkk");
          console.log(res);
         },
         error:(err)=>{
          console.log(err);
         }
       }
    )
   }
}
