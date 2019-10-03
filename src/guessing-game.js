class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.ceil((this.min + this.max) / 2);
    }

    lower() {
        this.max = Math.ceil((this.min + this.max) / 2);
    }

    greater() {
        this.min = Math.ceil((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
