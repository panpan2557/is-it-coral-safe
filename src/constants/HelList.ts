import { Substance, SubstanceGroup } from '../interfaces/Substance';

// alias should be lowercase

const microplastic: Substance = {
    key: 'microplastic',
    name: 'Microplastic sphere or beads',
    description: 'test description for microplastic',
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
    description: 'test description for oxybenzone',
    alias: [
        'oxybenzone',
        'benzophenone-3',
        '2-hydroxy-4-methoxybenzophenone',
        '(2-Hydroxy-4-methoxyphenyl)-',
        'phenylmethanone',
    ],
    urls: [''],
};

const nanoparticles: Substance = {
    key: 'nanoParticles',
    name: 'Nanoparticles',
    description: 'test description for nanoparticles',
    alias: [
        'fullerenes',
        'micronized zinc oxide',
        'nano zinc oxide',
        'micronized titanium dioxide',
        'micronized quartz silica',
    ],
    urls: [
        'https://www.nationalgeographic.com/science/article/150514-sunscreen-nanoparticle-nanotechnology-oceans-marine-beach-boat-toxic',
    ],
};

const octinoxate: Substance = {
    key: 'oxtinoxate',
    name: 'Octinoxate',
    description: 'test description for octinoxate',
    alias: [
        'octinoxate',
        'o methoxycinnamate (omc)',
        'omc',
        'parsol',
        'parsol mcx',
        'parsol mox',
        'escalol',
        '2-ethylhexyl p-methoxycinnamate',
    ],
    urls: [
        'https://www.consumerreports.org/sunscreens/the-truth-about-reef-safe-sunscreen/',
    ],
};

const octocrylene: Substance = {
    key: 'octocrylene',
    name: 'Octocrylene',
    description: 'test descrription for octocrylene',
    alias: [
        'octocrylene',
        'octocrilene',
        'uvinul n-539',
        '2-ethylhexyl 2-cyano-3',
        '3-diphenylprop-2-enoate',
    ],
    urls: [],
};

export const HelListGroup: SubstanceGroup = {
    name: 'HEL List',
    description:
        'Harmful substances to environment (ex. coral and sea creatures)',
    substances: [
        microplastic,
        oxybenzone,
        nanoparticles,
        octinoxate,
        octocrylene,
    ],
};

// HEL List:
// [DONE] Any form of microplastic sphere or beads.
// [DONE] Any nanoparticles like zinc oxide or titanium dioxide.
// [DONE] Oxybenzone
// [DONE] Octinoxate
// 4-methylbenzylidene camphor
// [DONE] Octocrylene
// Para-aminobenzoic acid (PABA)
// Methyl Paraben
// Ethyl Paraben
// Propyl Paraben
// Butyl Paraben
// Benzyl Paraben
// Triclosan
