import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-result',
  templateUrl: './img-result.component.html',
  styleUrls: ['./img-result.component.scss']
})
export class ImgResultComponent implements OnInit {

  @Input() titulo: string;
  @Input() texto: string;
  @Input() img: string;
  constructor() { }

  ngOnInit(): void {
  }

}
