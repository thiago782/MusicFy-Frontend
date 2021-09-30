import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Musica } from "src/app/models/musica";
import { MusicaService } from "src/app/services/musica.service";

@Component({
    selector: "app-cadastrar-musica",
    templateUrl: "./cadastrar-musica.component.html",
    styleUrls: ["./cadastrar-musica.component.css"],
})
export class CadastrarMusicaComponent implements OnInit {
    nome!: string;
    cantor!: string;
    anoLancamento!: number;
    estilo!: string;

    constructor(private service: MusicaService, private router: Router) {}

    ngOnInit(): void {}

    cadastrar(): void {
        let musica: Musica = {
            nome: this.nome,
            cantor: this.cantor,
            anoLancamento: this.anoLancamento,
            estilo: this.estilo,
        };
        this.service.create(musica).subscribe((musica) => {
            console.log(musica);
            this.router.navigate(["musica/listar"]);
        });
    }
}
