import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-sequence',
  templateUrl: './get-sequence.component.html',
  styleUrls: ['./get-sequence.component.css']
})
export class GetSequenceComponent implements OnInit {

  resultTriangularNumber: number = 0
  serieTriangular: number[] = [];
  length = 10;

  resultFibonacciNumber = 0;
  serieFibonacci: number[] = [0,1];
  isPrime: any = '';
  message: string = '';
  @Input() indexSerie: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getTriangularNumber(index: number): number {
  const value = ((index * (index + 1))/2);
  return value;
  }

  makeTriangularNumberSequence(index: number): void {
    console.log(index, '--index-30--')
    for (let i = 1; i <= this.indexSerie; i++) {
      this.resultTriangularNumber = this.getTriangularNumber(i);
        this.serieTriangular.push(this.resultTriangularNumber);
   }
   console.log(this.serieTriangular, '--serieTriangular');
  }

  makeFibonacciSequence(index: number): void{
    console.log(index, '--index-39-')
    for (let i = 2; i <= index; i++) {
        this.serieFibonacci.push(this.serieFibonacci[i - 1] + this.serieFibonacci[i - 2]);
        this.resultFibonacciNumber = this.serieFibonacci[i];
   }
   console.log(this.serieFibonacci, '---serieFibonacci---')
  }

  isPrimeNumber(number: number): void {
    if (number === 1) {
    this.message = 'No es número primo'
    } else {
      for (let i = 2; i <= number/2; i++) {
        if(number % i === 0) {
        this.isPrime = false;
        } else {
        this.isPrime = true;
        }
      }
    }
  }
  }

