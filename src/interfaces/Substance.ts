export interface MatchSubstance {
    substance: Substance;
    matchedName: string[];
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