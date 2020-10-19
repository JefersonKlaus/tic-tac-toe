import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() {
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  getPlayer(): string {
    return this.xIsNext ? 'O' : 'X';
  }

  makeMove(idx: number): void {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.getPlayer());
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner(this.squares);
  }

  calculateWinner(squares: Array<string>): string {
    const lines = [
      [0, 1, 2], // row
      [3, 4, 5], // row
      [6, 7, 8], // row
      [0, 3, 6], // col
      [1, 4, 7], // col
      [2, 5, 8], // col
      [0, 4, 8], // \
      [2, 4, 6]  // /
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}
