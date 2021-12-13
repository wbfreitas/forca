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
    mostrarBody = false;
    palavraSelecionada = null;

    palavras = [
        {
            palavra: 'Bora-vender',
            dica: 'Trending - #Hashtag - Meta',
            texto: 'texto 1 texto',
            img: 'https://dl.dropboxusercontent.com/s/5uqou2o4ya9agh1/bell-120px.png',
            palavra2: 'Bora vender'
        },
        {
            palavra: 'lead time',
            dica: 'Muito Importante',
            texto: 'texto 2 texto',
            img: 'https://dl.dropboxusercontent.com/s/5uqou2o4ya9agh1/bell-120px.png',
            palavra2: 'lead time',

        },
        {
            palavra: 'Contagem-de-BCPS',
            dica: 'Não podemos esquecer',
            texto: 'texto 3 texto',
            img: 'https://dl.dropboxusercontent.com/s/5uqou2o4ya9agh1/bell-120px.png',
            palavra2: 'Contagem de BCPS'

        },
        {
            palavra: 'batatinha-frita',
            dica: '123',
            texto: 'texto 4 texto',
            img: 'https://dl.dropboxusercontent.com/s/5uqou2o4ya9agh1/bell-120px.png',
            palavra2: 'Contagem de BCPS'
        }
    ]

    constructor(private activatedRoute: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) {
    }

    startGame(index): void {
        const selecionada = this.palavras[index];
        this.palavraSelecionada = selecionada;
        this.palavra = selecionada.palavra;
        this.dica = selecionada.dica;
        this.abc = this.abc2;
        this.mostrarBody = false;

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
            this.mostrarBody = true;
        }
    }

    temSelecionada(letra: string): boolean {
        return this.selecionada.indexOf(letra) > -1;
    }

    mostrar() {
        this.selecionada = this.palavra.toUpperCase().split('');
        this.mostrarBody = true;
    }

    next(): void {
        this.startGame(++this.index);
    }

    private showSucesso() {
        const reg = new RegExp(`[${this.selecionada.join()}]`, 'gi');

        if ((this.palavra.match(reg) || []).length === this.letras.length) {
            this.abc = this.sucesso.toLocaleUpperCase().split('');
            this.disabled = true;
            this.mostrarBody = true;
        }
    }

}
