import { Substance, SubstanceGroup } from '../interfaces/Substance';

// alias should be lowercase

const microplastic: Substance = {
    key: 'microplastic',
    name: 'Microplastic sphere or beads',
    description: '',
    alias: [
        'acrylates copolymer',
        'acrylates crosspolymer',
        'butylene',
        'carbomer',
        'dimethicone',
        'ethylene',
        'methacrylate copolymer',
        'methacrylate crosspolymer',
        'methyl methacrylate copolymer',
        'methyl methacrylate crosspolymer',
        'nylon',
        'polyacrylamide',
        'polyacrylate',
        'polypropylene',
        'polyurethane',
        'polyvinyl',
        'propylene copolymer or polypropylene',
        'pvp',
        'styrene copolymer',
        'tetrafluoroethylene',
        'vinyl acetate copolymer',
        'vp/va copolymer',
    ],
    urls: ['https://www.beatthemicrobead.org/guide-to-microplastics/'],
};

const oxybenzone: Substance = {
    key: 'oxybenzone',
    name: 'Oxybenzone',
    description: '',
    alias: [
        'oxybenzone',
        'benzophenone-3',
        '2-hydroxy-4-methoxybenzophenone',
        '(2-Hydroxy-4-methoxyphenyl)-',
        'phenylmethanone',
    ],
    urls: [''],
};

export const HelListGroup: SubstanceGroup = {
    name: 'HEL List',
    description:
        'Harmful substances to environment (ex. coral and sea creatures)',
    substances: [microplastic, oxybenzone],
};

// [DONE] Any form of microplastic sphere or beads.
// Any nanoparticles like zinc oxide or titanium dioxide.
// Oxybenzone
// Octinoxate
// 4-methylbenzylidene camphor
// Octocrylene
// Para-aminobenzoic acid (PABA)
// Methyl Paraben
// Ethyl Paraben
// Propyl Paraben
// Butyl Paraben
// Benzyl Paraben
// Triclosan
