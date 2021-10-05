import { Component, OnInit } from '@angular/core';
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
  abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  erros = 0;
  selecionada = ['-'];
  fim = 'GAME OVER';
  dica = '';
  index = 0;

  palavras = [
    {
      palavra: 'Contagem-de-BCPS',
      dica: 'Não podemos esquecer'
    },
    {
      palavra: 'lead-time',
      dica: 'Muito Importante'
    },
    {
      palavra: 'batatatinha-frita',
      dica: '123'
    },
  ]


  constructor(private activatedRoute: ActivatedRoute) {
  }

  startGame(index): void {
    const selecionada = this.palavras[index];
    this.palavra = selecionada.palavra;
    this.dica = selecionada.dica;
  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
      const index = params['pg'] || 0;
      console.log(index);
      this.startGame(index);
    
      this.letras = this.palavra.toLocaleUpperCase().split('');
    });
  }


  setLetra(letra: string): void {
    this.selecionada.push(letra);
    this.erros += this.letras.indexOf(letra) > -1 ? 0 : 1;
    if (this.erros >= 6) {
      this.abc = this.fim.split('');
    }

  }

  temSelecionada(letra: string): boolean {
    return this.selecionada.indexOf(letra) > -1;
  }

}
