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
        console.warn(sheet)
        var length = sheet.length -1;
        var currentSheet = sheet[length];
        var rules = sheet[length].rules || sheet[length].cssRules;
        try {
            console.warn(`@keyframes ${this.name} {
                0% {${this.printRulesAt(0)}}
                100% {${this.printRulesAt(1)}}
            }`)
          sheet[length].insertRule(`@keyframes ${this.name} {0% {${this.printRulesAt(0)}} 100% {${this.printRulesAt(1)}}}`, rules.length)
          // if(sheet[length].cssRules) return
           // console.warn(`@-webkit-keyframes ${this.name} {
           //      0% {${this.printRulesAt(0)}}
           //      100% {${this.printRulesAt(1)}}
           //  }`)
           //  sheet[length].insertRule(`@-webkit-keyframes ${this.name} {
           //      0% {${this.printRulesAt(0)}}
           //      100% {${this.printRulesAt(1)}}
           //  }`, rules.length);

        } catch (e) {
            console.error(e)
        };
    }
}

export { CssAnimationMaker }
