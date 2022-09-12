import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  indexSerie: number = 0;
  serieTriangular: number[] = [1, 3 , 6 , 10 , 15 , 21, 28 , 36 , 45 , 55];
  serieFibonacci: number [] = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  constructor() { }

  ngOnInit(): void {
  }

  getIndex(index:number):number {
    this.indexSerie = index;
    console.log(this.indexSerie, '--index-main');
    return this.indexSerie
  }
}
