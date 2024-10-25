class FontFamilyCardModel {
    fontName = '';

    lowecaseNeutrals = [];
    lowercaseAscendents = [];
    lowercaseDescendents = [];

    uppercaseNeutrals = [];
    uppercaseAscendents = [];
    uppercaseDescendents = [];

    constructor(fontName) {
        this.fontName = fontName;
    }

    getClassName(char, lowercase = true) {
        let className = 'card-char';
        className += this.fontName;
        className += '-';

        if(lowercase) {
            className += 'lowecase-';
            className += this._getCharHeightLowercase(char);

        } else {
            className += 'uppercase-'
            className += this._getCharHeightUppercase(char);
        }

        return className;
    }

    _getCharHeightLowercase(char) {
        if(this.lowecaseNeutrals.indexOf(char) != -1) return 'neutrals';
        if(this.lowercaseAscendents.indexOf(char) != -1) return 'ascendents';
        if(this.lowercaseDescendents.indexOf(char) != -1) return 'descendents';
    }

    _getCharHeightUppercase(char) {
        if(this.uppercaseNeutrals.indexOf(char) != -1) return 'neutrals';
        if(this.uppercaseAscendents.indexOf(char) != -1) return 'ascendents';
        if(this.uppercaseDescendents.indexOf(char) != -1) return 'descendents';
    }

}

