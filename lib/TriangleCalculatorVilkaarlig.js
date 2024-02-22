import { IsNotNull } from './common.js';
import { CheckNullValues } from './common.js';
import { toRadians }  from './common.js';



function CheckFormular(key, values) {

    switch (key) {
        // Her mangler vinkel A
        case "A":
            if(IsNotNull(values.B) && IsNotNull(values.C)) {
                const value = 180 - values.B - values.C;
                return {value: value, message: `Vinkel A er udregnet fra B og C: \n 180 - ${values.B} - ${values.C} = ${value}`};
            }
            if (IsNotNull(values.a) && IsNotNull(values.C) && IsNotNull(values.c)) {
                // Use the formula A = sin^(-1)((a*sin(C))/c)
                const AValue = Math.asin((values.a * Math.sin(values.C)) / values.c);
                const deg = (180 / Math.PI) * AValue;
                return { value: deg.toFixed(2), message: `Vinkel A er udregnet fra a, C og c - med Sinus: \n sin^(-1)((${values.a}*sin(${values.C}))/${values.c}) = ${deg.toFixed(2)}°` };
            }
        
            if (IsNotNull(values.a) && IsNotNull(values.B) && IsNotNull(values.b)) {
                // Use the formula A = sin^(-1)((a*sin(B))/b)
                const AValue = Math.asin((values.a * Math.sin(values.B)) / values.b);
                const deg = (180 / Math.PI) * AValue;
                return { value: deg.toFixed(2), message: `Vinkel A er udregnet fra a, B og b - med Sinus: \n sin^(-1)((${values.a}*sin(${values.B}))/${values.b}) = ${deg.toFixed(2)}°` };
            }
        
            if (IsNotNull(values.b) && IsNotNull(values.c) && IsNotNull(values.a)) {
                // Use the formula A = cos^(-1)((b^2+c^2-a^2)/2*b*c)
                const AValue = Math.acos((Math.pow(values.b, 2) + Math.pow(values.c, 2) - Math.pow(values.a, 2)) / (2 * values.b * values.c));
                const deg = (180 / Math.PI) * AValue;
                return { value: deg.toFixed(2), message: `Vinkel A er udregnet fra b, c og a - med Cosinus: \n cos^(-1)((${values.b}^2 + ${values.c}^2 - ${values.a}^2)/(2*${values.b}*${values.c})) = ${deg.toFixed(2)}°` };
            }
            break;

            // Her mangler vinkel B
        case "B":
            if(IsNotNull(values.A) && IsNotNull(values.C)) {
                const value = 180 - values.A - values.C;
                return {value: value, message: `Vinkel B er udregnet fra A og C: \n 180 - ${values.A} - ${values.C} = ${value}`};
            }
            if (IsNotNull(values.b) && IsNotNull(values.C) && IsNotNull(values.c)) {
                // Use the formula B = sin^(-1)((b*sin(C))/c)
                const BValue = Math.asin((values.b * Math.sin(values.C)) / values.c);
                const deg = (180 / Math.PI) * BValue;
                return { value: deg.toFixed(2), message: `Vinkel B er udregnet fra b, C og c - med Sinus: \n sin^(-1)((${values.b}*sin(${values.C}))/${values.c}) = ${deg.toFixed(2)}°` };
            }
        
            if (IsNotNull(values.b) && IsNotNull(values.A) && IsNotNull(values.a)) {
                // Use the formula B = sin^(-1)((b*sin(A))/a)
                const BValue = Math.asin((values.b * Math.sin(values.A)) / values.a);
                const deg = (180 / Math.PI) * BValue;
                return { value: deg.toFixed(2), message: `Vinkel B er udregnet fra b, A og a - med Sinus: \n sin^(-1)((${values.b}*sin(${values.A}))/${values.a}) = ${deg.toFixed(2)}°` };
            }
        
            if (IsNotNull(values.a) && IsNotNull(values.c) && IsNotNull(values.b)) {
                // Use the formula B = cos^(-1)((a^2+c^2-b^2)/2*a*c)
                const BValue = Math.acos((Math.pow(values.a, 2) + Math.pow(values.c, 2) - Math.pow(values.b, 2)) / (2 * values.a * values.c));
                const deg = (180 / Math.PI) * BValue;
                return { value: deg.toFixed(2), message: `Vinkel B er udregnet fra a, c og b - med Cosinus: \n cos^(-1)((${values.a}^2 + ${values.c}^2 - ${values.b}^2)/(2*${values.a}*${values.c})) = ${deg.toFixed(2)}°` };
            }      
            break;
            // Her mangler vinkel C
        case "C":
            if(IsNotNull(values.A) && IsNotNull(values.B)) {
                const value = 180 - values.A - values.B;
                return {value: value, message: `Vinkel C er udregnet fra A og B: \n 180 - ${values.A} - ${values.B} = ${value}`};
            }      
            if (IsNotNull(values.c) && IsNotNull(values.B) && IsNotNull(values.b)) {
                // Use the formula C = sin^(-1)((c*sin(B))/b)
                const CValue = Math.asin((values.c * Math.sin(values.B)) / values.b);
                const deg = (180 / Math.PI) * CValue;
                return { value: deg.toFixed(2), message: `Vinkel C er udregnet fra c, B og b - med Sinus: \n sin^(-1)((${values.c}*sin(${values.B}))/${values.b}) = ${deg.toFixed(2)}°` };
            }
        
            if (IsNotNull(values.c) && IsNotNull(values.A) && IsNotNull(values.a)) {
                // Use the formula C = sin^(-1)((c*sin(A))/a)
                const CValue = Math.asin((values.c * Math.sin(values.A)) / values.a);
                const deg = (180 / Math.PI) * CValue;
                return { value: deg.toFixed(2), message: `Vinkel C er udregnet fra c, A og a - med Sinus: \n sin^(-1)((${values.c}*sin(${values.A}))/${values.a}) = ${deg.toFixed(2)}°` };
            }
        
            if (IsNotNull(values.a) && IsNotNull(values.b) && IsNotNull(values.c)) {
                // Use the formula C = cos^(-1)((a^2+b^2-c^2)/2*a*b)
                const CValue = Math.acos((Math.pow(values.a, 2) + Math.pow(values.b, 2) - Math.pow(values.c, 2)) / (2 * values.a * values.b));
                const deg = (180 / Math.PI) * CValue;
                return { value: deg.toFixed(2), message: `Vinkel C er udregnet fra a, b og c - med Cosinus: \n cos^(-1)((${values.a}^2 + ${values.b}^2 - ${values.c}^2)/(2*${values.a}*${values.b})) = ${deg.toFixed(2)}°` };
            }
        
            break;  
        case "a":
            if (IsNotNull(values.c) && IsNotNull(values.A) && IsNotNull(values.C)) {
                // Use the formula a = (c*sin(A))/sin(C)
                const aValue = (values.c * Math.sin(toRadians(values.A))) / Math.sin(toRadians(values.C));
                return { value: aValue.toFixed(2), message: `Længden af a er udregnet fra c, A og C - med Sinus: \n (${values.c}*sin(${values.A}))/sin(${values.C}) = ${aValue.toFixed(2)}` };
            }
        
            if (IsNotNull(values.b) && IsNotNull(values.A) && IsNotNull(values.B)) {
                // Use the formula a = (b*sin(A))/sin(B)
                const aValue = (values.b * Math.sin(toRadians(values.A))) / Math.sin(toRadians(values.B));
                return { value: aValue.toFixed(2), message: `Længden af a er udregnet fra b, A og B - med Sinus: \n (${values.b}*sin(${values.A}))/sin(${values.B}) = ${aValue.toFixed(2)}` };
            }
        
            if (IsNotNull(values.b) && IsNotNull(values.c) && IsNotNull(values.A)) {
                // Use the formula a = sqrt(b^2+c^2-2*b*c*cos(A))
                const aValue = Math.sqrt(Math.pow(values.b, 2) + Math.pow(values.c, 2) - 2 * values.b * values.c * Math.cos(toRadians(values.A)));
                return { value: aValue.toFixed(2), message: `Længden af a er udregnet fra b, c og A: \n sqrt(${values.b}^2 + ${values.c}^2 - 2*${values.b}*${values.c}*cos(${values.A})) = ${aValue.toFixed(2)}` };
            }
            break;

        case "b":
            if (IsNotNull(values.a) && IsNotNull(values.B) && IsNotNull(values.A)) {
                // Use the formula b = (a*sin(B))/sin(A)
                const bValue = (values.a * Math.sin(toRadians(values.B))) / Math.sin(toRadians(values.A));
                return { value: bValue.toFixed(2), message: `Længden af b er udregnet fra a, B og A - med Sinus: \n (${values.a}*sin(${values.B}))/sin(${values.A}) = ${bValue.toFixed(2)}` };
            }
        
            if (IsNotNull(values.c) && IsNotNull(values.B) && IsNotNull(values.C)) {
                // Use the formula b = (c*sin(B))/sin(C)
                const bValue = (values.c * Math.sin(toRadians(values.B))) / Math.sin(toRadians(values.C));
                return { value: bValue.toFixed(2), message: `Længden af b er udregnet fra c, B og C - med Sinus: \n (${values.c}*sin(${values.B}))/sin(${values.C}) = ${bValue.toFixed(2)}` };
            }
        
            if (IsNotNull(values.a) && IsNotNull(values.c) && IsNotNull(values.B)) {
                // Use the formula b = sqrt(a^2+c^2-2*a*c*cos(B))
                const bValue = Math.sqrt(Math.pow(values.a, 2) + Math.pow(values.c, 2) - 2 * values.a * values.c * Math.cos(toRadians(values.B)));
                return { value: bValue.toFixed(2), message: `Længden af b er udregnet fra a, c og B: \n sqrt(${values.a}^2 + ${values.c}^2 - 2*${values.a}*${values.c}*cos(${values.B})) = ${bValue.toFixed(2)}` };
            }
            break;

        case "c":
            if (IsNotNull(values.b) && IsNotNull(values.C) && IsNotNull(values.B)) {
                // Use the formula c = (b*sin(C))/sin(B)
                const cValue = (values.b * Math.sin(toRadians(values.C))) / Math.sin(toRadians(values.B));
                return { value: cValue.toFixed(2), message: `Længden af c er udregnet fra b, C og B - med Sinus: \n (${values.b}*sin(${values.C}))/sin(${values.B}) = ${cValue.toFixed(2)}` };
            }
        
            if (IsNotNull(values.a) && IsNotNull(values.C) && IsNotNull(values.A)) {
                // Use the formula c = (a*sin(C))/sin(A)
                const cValue = (values.a * Math.sin(toRadians(values.C))) / Math.sin(toRadians(values.A));
                return { value: cValue.toFixed(2), message: `Længden af c er udregnet fra a, C og A - med Sinus: \n (${values.a}*sin(${values.C}))/sin(${values.A}) = ${cValue.toFixed(2)}` };
            }
        
            if (IsNotNull(values.a) && IsNotNull(values.b) && IsNotNull(values.C)) {
                // Use the formula c = sqrt(a^2+b^2-2*b*c*cos(C))
                const cValue = Math.sqrt(Math.pow(values.a, 2) + Math.pow(values.b, 2) - 2 * values.b * values.c * Math.cos(toRadians(values.C)));
                return { value: cValue.toFixed(2), message: `Længden af c er udregnet fra a, b og C - med Cosinus: \n sqrt(${values.a}^2 + ${values.b}^2 - 2*${values.b}*${values.c}*cos(${values.C})) = ${cValue.toFixed(2)}` };
            }
            break;
        case "h":
            if (IsNotNull(values.A) && IsNotNull(values.b)) {
                // Use the formula h = sin(A)*b
                const hValue = Math.sin(toRadians(values.A)) * values.b;
                return { value: hValue.toFixed(2), message: `Højden h er udregnet fra vinkel A og b - med Sinus: \n sin(${values.A})*${values.b} = ${hValue.toFixed(2)}` };
            }
        
            if (IsNotNull(values.B) && IsNotNull(values.a)) {
                // Use the formula h = sin(B)*a
                const hValue = Math.sin(toRadians(values.B)) * values.a;
                return { value: hValue.toFixed(2), message: `Højden h er udregnet fra vinkel B og a - med Sinus: \n sin(${values.B})*${values.a} = ${hValue.toFixed(2)}` };
            }
            break;
    }

    return null;


}


function RunCalculate(values) {
    for (const key in values) {
        if (values.hasOwnProperty(key)) {
            const value = values[key];
            if (!IsNotNull(value)) {
                console.log(`Empty value found for key: ${key}`);

                const calculatedValue = CheckFormular(key, values);
                if(calculatedValue !== null) {
                    values[key] = calculatedValue.value;
                    values["messages"].push(calculatedValue.message)
                    console.log(calculatedValue.message)
                }
            } 
        }
    }
    if(CheckNullValues(values)) {
        RunCalculate(values)
    }
}



export function TriangleCalculate(values) {
    const nonEmptyValuesCount = Object.values(values).filter(value => value !== "").length;
    if (nonEmptyValuesCount < 3) {
        throw Error("Ikke nok værdier - minimum 3");
    }

    // CAST AS NUMBER
    for (const key in values) {

        if(values[key] === "") {
            values[key] = null;
        } else {
            values[key] = Number(values[key]);
        }
      }
      
      

    if((values.A + values.B + values.C) > 180) {
        throw Error("Summer af vinklerne kan ikke være større end 180");
    }

    console.log(values);
    

    if(IsNotNull(values.A) && IsNotNull(values.B) && IsNotNull(values.C)) {
        if((values.A + values.B + values.C) < 180) {
            throw Error("Summer af vinklerne kan ikke være mindre end 180");
        }
    }

    values["messages"] = [];
    values["h"] = null;


    RunCalculate(values);

    if(values.A + values.B + values.C !== 180) {
        throw Error("Ugyldig trekant");
    }

    return values;

}