import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-papai-noel',
  templateUrl: './papai-noel.component.html',
  styleUrls: ['./papai-noel.component.scss']
})
export class PapaiNoelComponent implements OnInit {

  @Input() errors = 0;
  @Input() mostrar = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
