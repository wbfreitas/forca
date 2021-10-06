import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'forca';
    palavra = '';
    letras = [];
    abc2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    erros = 0;
    selecionada = ['-'];
    fim = 'GAME OVER';
    sucesso = 'congratulations!';
    dica = '';
    index = 0;
    disabled = false;

    palavras = [
        {
            palavra: 'Bora-vender',
            dica: 'Trending - #Hashtag - Meta',
        },
        {
            palavra: 'lead-time',
            dica: 'Muito Importante'
        },
        {
            palavra: 'Contagem-de-BCPS',
            dica: 'Não podemos esquecer'
        },
        {
            palavra: 'batatinha-frita',
            dica: '123'
        }
    ]

    constructor(private activatedRoute: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) {
    }

    startGame(index): void {
        const selecionada = this.palavras[index];
        this.palavra = selecionada.palavra;
        this.dica = selecionada.dica;
        this.abc = this.abc2;

        this.selecionada = ['-'];
        this.erros = 0;
        this.disabled = false;

        this.letras = this
            .palavra.toLocaleUpperCase().split('');
    }

    ngOnInit(): void {

        this.activatedRoute.queryParams.subscribe((params: Params) => {
            const index = params['pg'] || 0;
            this.startGame(index);
        });
    }


    setLetra(letra: string): void {
        this.selecionada.push(letra);
        this.erros += this.letras.indexOf(letra) > -1 ? 0 : 1;
        this.showError();
        this.showSucesso();
    }

    private showError() {
        if (this.erros >= 6) {
            this.abc = this.fim.split('');
            this.disabled = true;
        }
    }

    temSelecionada(letra: string): boolean {
        return this.selecionada.indexOf(letra) > -1;
    }

    mostrar() {
        this.selecionada = this.palavra.toUpperCase().split('');
    }

    next(): void {
        this.startGame(++this.index);
    }

    private showSucesso() {
        const reg = new RegExp(`[${this.selecionada.join()}]`, 'gi');

        if ((this.palavra.match(reg) || []).length === this.letras.length) {
            this.abc = this.sucesso.toLocaleUpperCase().split('');
            this.disabled = true;
        }
    }

}
