export class MatchSubstance {
    substance: Substance;
    matchedName: string[] = [];
    constructor(substance: Substance) {
        this.substance = substance;
    }
    addMatchedName(name: string) {
        this.matchedName = this.matchedName.concat(name);
    }
}

export interface Substance {
    key: string;
    name: string;
    alias: string[];
    description: string;
    urls: string[];
}

export interface SubstanceGroup {
    name: string;
    description: string;
    substances: Substance[];
}