import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SectionPageComponent } from "./section-page.component";

const routes: Routes = [
    {
       path: 'section/:id', component: SectionPageComponent
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class SectionPageRoutingModule {}