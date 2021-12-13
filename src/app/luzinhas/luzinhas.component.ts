import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luzinhas',
  templateUrl: './luzinhas.component.html',
  styleUrls: ['./luzinhas.component.scss']
})
export class LuzinhasComponent implements OnInit {
  luz = new Array(40).fill("");
  constructor() { }

  ngOnInit(): void {
  }

}
