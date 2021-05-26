import { HelListGroup } from '../constants/HelList';
import { MatchSubstance } from '../interfaces/Substance';

const delims = /[^;,]+/g;

export const validate = (text: string): MatchSubstance[] => {
    const ingredients = text.match(delims);
    return HelListGroup.substances.map<MatchSubstance>((substance) => {
        const matchedSubstance = new MatchSubstance(substance);
        substance.alias.forEach((name) => {
            if (ingredients?.includes(name.toLowerCase())) {
                matchedSubstance.addMatchedName(name.toLocaleLowerCase());
            }
        });
        return matchedSubstance;
    }).filter(matchSubstance => matchSubstance.matchedName.length > 0);
};
