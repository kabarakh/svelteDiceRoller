export class SingleDie {
    protected input: string;
    protected average: number;
    protected sum = 0;
    protected count = 0;
    protected type = 0;
    protected delimiter: string;

    public constructor(input: string) {
        this.input = input;

        if (input.match(/^(-|\+)/)) {
            this.delimiter = input.charAt(0);
            input = input.substr(1);
        } else {
            this.delimiter = '+';
        }

        if (input.match(/[dw]/)) {
            const inputParts = input.split(/[dw]/);
            this.count = inputParts[0] === '' ? 1 : parseInt(inputParts[0], 10);
            this.type = parseInt(inputParts[inputParts.length - 1], 10) || 0;
        }
    }

    public getSum(): number {
        return this.sum;
    }

    public getAverage(): number {
        return this.average;
    }

    public getDelimiter(): string {
        return this.delimiter;
    }

    public calculateRoll(): void {
        if (this.count && this.type) {
            this.average = (this.type + 1) / 2 * this.count;

            for (let i = 0; i < this.count; i++) {
                this.sum += Math.floor(1 + (Math.random() * this.type));
            }
        } else if (this.input.match(/\d+/)) {
            this.average = this.sum = this.input.match(/^-/) ? -1 * parseInt(this.input, 10) : parseInt(this.input, 10);
        }
    }
}
