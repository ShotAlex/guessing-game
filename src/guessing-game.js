class GuessingGame {
    constructor() {
        // (first + last) / 2   -->     binary search (wiki)
        this.first = null;
        this.last = null;
    } 

    setRange(min, max) {
        this.first = min;
        this.last = max;
    }

    guess() {
        return Math.ceil((this.first + this.last) / 2);
    }

    lower() {
        this.last = this.guess();
    }

    greater() {
        this.first = this.guess();
    }

}

module.exports = GuessingGame;
