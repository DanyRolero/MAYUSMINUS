class AlphabetModel2 {
    #CHARS = [
        'a','b','c','d','e',
        'f','g','h','i','j',
        'k','l','m','n','ñ',
        'o','p','q','r','s',
        't','u','v','w','x',
        'y','z'
    ];
    
    //---------------------------------------------------------------------------------
    constructor() {
        Object.freeze(this.#CHARS);
        this.chars = this.#CHARS.slice(0, this.#CHARS.length);
    }

    //---------------------------------------------------------------------------------
    getcopyAllChars() {
        return this.#CHARS.slice(0, this.#CHARS.length);
    }

    //---------------------------------------------------------------------------------
    getRandomChar() {
        let randomIndex = Math.floor(Math.random() * this.#CHARS.length);
        return this.#CHARS[randomIndex];
    }

    //---------------------------------------------------------------------------------
    getRandomUniqueChars(count) {
        let result = [];
        for(let i = 0; i < count; i++) {
            let randomIndex = Math.floor(Math.random() * this.chars.length);
            result.push(this.chars.splice(randomIndex, 1)[0]);
        }
        return result;
    }

    //---------------------------------------------------------------------------------
    extractCharFromIndex(index) {
        return this.chars.splice(index, 1)[0];
    }

    //---------------------------------------------------------------------------------
    extractCharFromChar(char) {
        let indexOfChart = this.chars.indexOf(char);
        return this.chars.splice(indexOfChart, 1)[0];
    }

    //---------------------------------------------------------------------------------
    extractRandomChar() {
        if(this.chars.length == 0) this.resetChars();
        let randomIndex = Math.floor(Math.random() * this.chars.length);
        return this.chars.splice(randomIndex, 1)[0];
    }

    //---------------------------------------------------------------------------------
    resetChars() {
        this.chars = this.#CHARS.slice(0, this.#CHARS.length);
    }

}