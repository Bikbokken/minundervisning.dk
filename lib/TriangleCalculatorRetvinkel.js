

//const values = {
//   a: "",
//   b: "",
//   c: "",
//    A: "",
//   B: "",
//    C: "",
//    error: null,
//  };



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
            break;

            // Her mangler vinkel B
        case "B":
            if(IsNotNull(values.A) && IsNotNull(values.C)) {
                const value = 180 - values.A - values.C;
                return {value: value, message: `Vinkel B er udregnet fra A og C: \n 180 - ${values.A} - ${values.C} = ${value}`};
            }      
            break;
            // Her mangler vinkel C
        case "C":
            if(IsNotNull(values.A) && IsNotNull(values.B)) {
                const value = 180 - values.A - values.B;
                return {value: value, message: `Vinkel C er udregnet fra A og B: \n 180 - ${values.A} - ${values.B} = ${value}`};
            }      
            break;  

    }



    if(Number(values.C) === 90) {
        console.log("Det er en retvinklet trekant");

        switch(key) {
            case "A":
                if (IsNotNull(values.b) && IsNotNull(values.c)) {
                    // Use the formula A = cos^(-1)(b/c)
                    const AValue = Math.acos(values.b / values.c).toFixed(2);
                    const deg = (180 / Math.PI) * AValue;
                    return { value: deg, message: `Vinkel A er udregnet fra b og c - med Cosinus: \n cos^(-1)(${values.b}/${values.c}) = ${deg}` };
                }
            
                if (IsNotNull(values.a) && IsNotNull(values.c)) {
                    // Use the formula A = sin^(-1)(a/c)
                    const AValue = Math.asin(values.a / values.c).toFixed(2);
                    const deg = (180 / Math.PI) * AValue;
                    return { value: deg, message: `Vinkel A er udregnet fra a og c - med Sinus: \n sin^(-1)(${values.a}/${values.c}) = ${deg}` };
                }
            
                if (IsNotNull(values.a) && IsNotNull(values.b)) {
                    // Use the formula A = tan^(-1)(a/b)
                    const AValue = Math.atan(values.a / values.b).toFixed(2);
                    const deg = (180 / Math.PI) * AValue;
                    return { value: deg, message: `Vinkel A er udregnet fra a og b - med Tangens: \n tan^(-1)(${values.a}/${values.b}) = ${deg}` };
                }
            
                break;
            case "B":
                if (IsNotNull(values.a) && IsNotNull(values.c)) {
                    // Use the formula B = cos^(-1)(a/c)
                    const BValue = Math.acos(values.a / values.c).toFixed(2);
                    const deg = (180 / Math.PI) * BValue;

                    return { value: deg, message: `Vinkel B er udregnet fra a og c - med Cosinus: \n cos^(-1)(${values.a}/${values.c}) = ${deg}` };
                }
            
                if (IsNotNull(values.b) && IsNotNull(values.c)) {
                    // Use the formula B = sin^(-1)(b/c)
                    const BValue = Math.asin(values.b / values.c).toFixed(2);
                    const deg = (180 / Math.PI) * BValue;

                    return { value: deg, message: `Vinkel B er udregnet fra b og c - med Sinus: \n sin^(-1)(${values.b}/${values.c}) = ${deg}` };
                }
            
                if (IsNotNull(values.b) && IsNotNull(values.a)) {
                    // Use the formula B = tan^(-1)(b/a)
                    const BValue = Math.atan(values.b / values.a).toFixed(2);
                    const deg = (180 / Math.PI) * BValue;
                    return { value: deg, message: `Vinkel B er udregnet fra b og a - med Tangens: \n tan^(-1)(${values.b}/${values.a}) = ${deg}` };
                }
            
                break;
            case "a":
                if (IsNotNull(values.c) && IsNotNull(values.b)) {
                    // Use the formula a = sqrt(c^2 - b^2)
                    const value = Math.sqrt(Math.pow(values.c, 2) - Math.pow(values.b, 2)).toFixed(2);
                    return { value: value, message: `Længden af a er udregnet fra c og b: \n sqrt(${values.c}^2 - ${values.b}^2) = ${value}` };
                }
                if (IsNotNull(values.b) && IsNotNull(values.B)) {
                    // Use the formula a = b / tan(B)
                    const value = (values.b / Math.tan(toRadians(values.B))).toFixed(2);
                    return { value: value, message: `Længden af a er udregnet fra b og B: \n ${values.b} / tan(${values.B}) = ${value}` };
                }

                if (IsNotNull(values.c) && IsNotNull(values.A)) {
                    // Use the formula a = c * sin(A)
                    const value = (values.c * Math.sin(toRadians(values.A))).toFixed(2);
                    return { value: value, message: `Længden af a er udregnet fra c og A: \n ${values.c} * sin(${values.A}) = ${value}` };
                }

                if (IsNotNull(values.c) && IsNotNull(values.B)) {
                    // Use the formula a = c * cos(B)
                    const value = (values.c * Math.cos(toRadians(values.B))).toFixed(2);
                    return { value: value, message: `Længden af a er udregnet fra c og B: \n ${values.c} * cos(${values.B}) = ${value}` };
                }

                if (IsNotNull(values.b) && IsNotNull(values.A)) {
                    // Use the formula a = b * tan(A)
                    const value = (values.b * Math.tan(toRadians(values.A))).toFixed(2);
                    return { value: value, message: `Længden af a er udregnet fra b og A: \n ${values.b} * tan(${values.A}) = ${value}` };
                }
                break;
            case "b":
                if (IsNotNull(values.c) && IsNotNull(values.a)) {
                    // Use the formula b = sqrt(c^2 - a^2)
                    const bValue = Math.sqrt(Math.pow(values.c, 2) - Math.pow(values.a, 2)).toFixed(2);
                    return { value: bValue, message: `Længden af b er udregnet fra c og a: \n sqrt(${values.c}^2 - ${values.a}^2) = ${bValue}` };
                }
            
                if (IsNotNull(values.c) && IsNotNull(values.A)) {
                    // Use the formula b = c * cos(A)
                    const bValue = (values.c * Math.cos(toRadians(values.A))).toFixed(2);
                    return { value: bValue, message: `Længden af b er udregnet fra c og A: \n ${values.c} * cos(${values.A}) = ${bValue}` };
                }
            
                if (IsNotNull(values.a) && IsNotNull(values.B)) {
                    // Use the formula b = a * tan(B)
                    const bValue = (values.a * Math.tan(toRadians(values.B))).toFixed(2);
                    return { value: bValue, message: `Længden af b er udregnet fra a og B: \n ${values.a} * tan(${values.B}) = ${bValue}` };
                }
            
                if (IsNotNull(values.c) && IsNotNull(values.B)) {
                    // Use the formula b = c * sin(B)
                    const bValue = (values.c * Math.sin(toRadians(values.B))).toFixed(2);
                    return { value: bValue, message: `Længden af b er udregnet fra c og B: \n ${values.c} * sin(${values.B}) = ${bValue}` };
                }
            
                if (IsNotNull(values.a) && IsNotNull(values.A)) {
                    // Use the formula b = a / tan(A)
                    const bValue = (values.a / Math.tan(toRadians(values.A))).toFixed(2);
                    return { value: bValue, message: `Længden af b er udregnet fra a og A: \n ${values.a} / tan(${values.A}) = ${bValue}` };
                }
                break;
            case "c":
                if (IsNotNull(values.a) && IsNotNull(values.b)) {
                    // Use the formula c = sqrt(a^2 + b^2)
                    const cValue = Math.sqrt(Math.pow(values.a, 2) + Math.pow(values.b, 2)).toFixed(2);
                    return { value: cValue, message: `Længden af c er udregnet fra a og b: \n sqrt(${values.a}^2 + ${values.b}^2) = ${cValue}` };
                }

                if (IsNotNull(values.b) && IsNotNull(values.A)) {
                    // Use the formula c = b / cos(A)
                    const cValue = (values.b / Math.cos(toRadians(values.A))).toFixed(2);
                    return { value: cValue, message: `Længden af c er udregnet fra b og A: \n ${values.b} / cos(${values.A}) = ${cValue}` };
                }

                if (IsNotNull(values.a) && IsNotNull(values.B)) {
                    // Use the formula c = a / cos(B)
                    const cValue = (values.a / Math.cos(toRadians(values.B))).toFixed(2);
                    return { value: cValue, message: `Længden af c er udregnet fra a og B: \n ${values.a} / cos(${values.B}) = ${cValue}` };
                }

                if (IsNotNull(values.a) && IsNotNull(values.A)) {
                    // Use the formula c = a / sin(A)
                    const cValue = (values.a / Math.sin(toRadians(values.A))).toFixed(2);
                    return { value: cValue, message: `Længden af c er udregnet fra a og A: \n ${values.a} / sin(${values.A}) = ${cValue}` };
                }

                if (IsNotNull(values.b) && IsNotNull(values.B)) {
                    // Use the formula c = b / sin(B)
                    const cValue = (values.b / Math.sin(toRadians(values.B))).toFixed(2);
                    return { value: cValue, message: `Længden af c er udregnet fra b og B: \n ${values.b} / sin(${values.B}) = ${cValue}` };
                }

                break;    
           

                

        }
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



    RunCalculate(values);

    if(values.A + values.B + values.C !== 180) {
        throw Error("Ugyldig trekant");
    }

    return values;

}