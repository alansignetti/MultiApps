import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent implements OnInit {
  public leftDice = '../../../assets/dice/dice1.png';
  public rightDice = '../../../assets/dice/dice2.png';
  public num1: number = 0;
  public num2: number = 0;
  public disabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public rollDice() {
    this.num1 = Math.round(Math.random() * 5) + 1;
    this.num2 = Math.round(Math.random() * 5) + 1;
    this.leftDice = '../../../assets/dice/dice' + this.num1 + '.png';
    this.rightDice = '../../../assets/dice/dice' + this.num2 + '.png';
    this.disableButton();
  }
  public disableButton() {
    if (this.num1 === this.num2) {
      this.disabled = true;
    }

    setTimeout(() => {
      this.disabled = false;
    }, 2500);
  }
}
