import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarMusicaComponent } from "./components/views/produto/cadastrar-musica/cadastrar-musica.component";
import { ListarMusicaComponent } from "./components/views/produto/listar-musica/listar-musica.component";



const routes: Routes = [
    {
        path: "",
        component: ListarMusicaComponent,
    },
    {
        path: "musica/listar",
        component: ListarMusicaComponent,
    },
    {
        path: "musica/cadastrar",
        component: CadastrarMusicaComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
