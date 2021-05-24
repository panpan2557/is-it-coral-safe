import { HelListGroup } from '../constants/HelList';
import { MatchSubstance } from '../interfaces/Substance';

const delims = /[^;,]+/g;

export const validate = (text: string) => {
    const ingredients = text.match(delims);
    if (ingredients) {
        ingredients.map(ingredient => {
            const x = HelListGroup.substances.map<MatchSubstance>(substance => {
                return substance.alias.includes(ingredient.toLowerCase())
                    ? {
                        substance: substance,
                        matchedName: [ingredient]
                    }
                    : {
                        substance: substance,
                        matchedName: []
                    };
            }).reduce((prev, current, i, array) => {
                return prev.substance.key === current.substance.key
                    ? {
                        substance: prev.substance,
                        matchedName: prev.matchedName.concat(current.matchedName)
                    }
                    : {
                        substance: current.substance,
                        matchedName: current.matchedName
                    };
            });
        });
    }
};
