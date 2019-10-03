class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.state = 'lower';
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let oldMin = this.min;
        let oldMax = this.max;
        if(this.state == 'lower')
        {
            this.max = Math.floor((this.max + this.min) / 2);
        } else if(this.state == 'greater'){
            this.min = Math.ceil((this.max + this.min) / 2);
        }
        return Math.floor((oldMin+oldMax) / 2);
    }

    lower() {
        this.state = 'lower';
    }

    greater() {
        this.state = 'greater';
    }
}

module.exports = GuessingGame;
