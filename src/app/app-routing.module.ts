import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ListagemComponent } from "./listagem/listagem.component";
import { DetalhamentoComponent } from "./detalhamento/detalhamento.component";


const routes: Routes = [
    {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "cadastro",
    component: CadastroComponent,
  },
  {
    path: "listagem",
    component: ListagemComponent,
  },
  {
    path: "detalhamento",
    component: DetalhamentoComponent,
  },
  {
    path: "**",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}