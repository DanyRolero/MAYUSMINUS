export class CardCharsSVGPartData {
    #charsLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    #charsUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    #width = 68;
    #height = 108;
    #svgPath = '../assets/img/svg-cards/';


    // ----------------------------------------------------------------
    _getCharIndex(char) { 
        if (this.#charsLowerCase.indexOf(char) !== -1) return this.#charsLowerCase.indexOf(char);
        else if (this.#charsUpperCase.indexOf(char) !== -1) return this.#charsUpperCase.indexOf(char);
        throw new Error(`"${char}" is not a valid character`);
    }

    // ----------------------------------------------------------------
    _getHref(char, font) { 
        return `${this.#svgPath}${font}.svg#${char}`; 
    }

    //---------------------------------------------------------------------------------
    _getViewBox(char) {
        let x = this.#width * this._getCharIndex(char);
        let y = textTransform === 'lowercase' ? 0 : this.#height;
        return `${x} ${y} ${this.#width} ${this.#height}`;
    }

    // ----------------------------------------------------------------
    getSVGData(char, font) {
        return {
            href: this._getHref(char, font),
            viewBox: this._getViewBox(char),
            char: char
        };
    }
}