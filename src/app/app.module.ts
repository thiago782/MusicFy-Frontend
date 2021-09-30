import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastrarMusicaComponent } from "./components/views/produto/cadastrar-musica/cadastrar-musica.component";
import { ListarMusicaComponent } from "./components/views/produto/listar-musica/listar-musica.component";


@NgModule({
    declarations: [
        AppComponent,
        ListarMusicaComponent,
        CadastrarMusicaComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
