class DekkoFontFamilyCardModel extends FontFamilyCardModel{
    constructor(fontName) {
        super(fontName);

        this.lowecaseNeutrals = ['a', 'c', 'e', 'j', 'm', 'n', 'o', 'r', 's', 'u', 'v', 'w', 'x', 'z'];
        this.lowercaseAscendents = ['b', 'd', 'f', 'h', 'i', 'k', 'l', 'ñ', 't'];
        this.lowercaseDescendents = ['g', 'p', 'q', 'y'];

        this.uppercaseNeutrals = ['a', 'c', 'e', 'j', 'm', 'n', 'o', 'r', 's', 'u', 'v', 'w', 'x', 'z', 'b', 'd', 'f', 'h', 'i', 'k', 'l', 't', 'g', 'p', 'q', 'y'];
        this.uppercaseAscendents = ['ñ'];
    }
}