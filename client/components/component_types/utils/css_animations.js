class CssAnimationMaker {
    constructor(name, ...args){
        this.name = name;
        this.rules = args
    }
    printRulesAt( index ){
        var returned = '',
            rules = this.rules[index];
        for( let rule in rules){
            returned += String(rule).concat(':', rules[rule] ) + ';';
        }
        return returned
    }
    makeKeyframesRule( sheet ){
        try {
          var length = sheet.length -1
          sheet[length].insertRule(`
        @keyframes ${this.name} {
            0% {
                ${this.printRulesAt(0)}
            }
            100% {
                ${this.printRulesAt(1)}
            }
        }`, sheet[length].rules.length)
        sheet[length].insertRule(`
        @-webkit-keyframes ${this.name} {
            0% {
                ${this.printRulesAt(0)}
            }
            100% {
                ${this.printRulesAt(1)}
            }
        }`, sheet[length].rules.length);

        } catch (e) {
            console.log(e)
        };
    }
}

export { CssAnimationMaker }
