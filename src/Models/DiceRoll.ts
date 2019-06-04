import { SingleDie } from './SingleDie';

export class DiceRoll {
  dice: SingleDie[] = [];
  average = 0;
  sum = 0;
  date: Date;
  input: string;

  public constructor(input: string) {
    this.date = new Date();
    this.input = input;

    const inputParts = this.prepareInputParts(input);

    inputParts.forEach(singlePart => {
      if (!singlePart.match(/^(\+|-)$/)) {
        this.dice.push(new SingleDie(singlePart));
      }
    });
  }

  public getInput(): string {
    return this.input;
  }

  public getSum(): number {
    return this.sum;
  }

  public getAverage(): number {
    return this.average;
  }

  public getDate(): Date {
    return this.date;
  }

  public getDice(): SingleDie[] {
    return this.dice;
  }

  public calculateRoll(): void {
    this.dice.forEach(die => {
      die.calculateRoll();

      if (die.getDelimiter() === '+') {
        this.average += die.getAverage();
        this.sum += die.getSum();
      } else if (die.getDelimiter() === '-') {
        this.average -= die.getAverage();
        this.sum -= die.getSum();
      }
    });
  }

  protected prepareInputParts(input: string): Array<string> {
    input = input
      .toLowerCase()
      .replace(/\s*/g, '')
      .replace(/[^0-9wd+\-]/g, '')
      .replace(/(\+|-)/g, ' $1');

    return input.split(' ');
  }
}
