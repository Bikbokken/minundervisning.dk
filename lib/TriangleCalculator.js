

//const values = {
//   a: "",
//   b: "",
//   c: "",
//    A: "",
//   B: "",
//    C: "",
//    error: null,
//  };

function IsNotNull(value) {
    return value !== null;
}


function CheckFormular(key, values) {
    switch (key) {
        // Her mangler vinkel A
        case "A":
            if(IsNotNull(values.B) || IsNotNull(values.C)) {
                const value = 180 - values.B - values.C;
                return {value: value, message: `Vinkel A er udregnet fra B og C: \n 180 - ${values.B} - ${values.C} = ${value}`};
            }
        case "B":
            if(IsNotNull(values.A) || IsNotNull(values.C)) {
                const value = 180 - values.A - values.C;
                return {value: value, message: `Vinkel B er udregnet fra A og C: \n 180 - ${values.A} - ${values.C} = ${value}`};
            }      
        case "C":
            if(IsNotNull(values.A) || IsNotNull(values.B)) {
                const value = 180 - values.A - values.B;
                return {value: value, message: `Vinkel C er udregnet fra A og B: \n 180 - ${values.A} - ${values.B} = ${value}`};
            }        


        default:
            return null;
    }


}


function RunCalculate(values) {
    console.log("VALUES:");
    console.log(values);

   for (const key in values) {
        if (values.hasOwnProperty(key)) {
            const value = values[key];
            if (value === "") {
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
}



export function TriangleCalculate(values) {
    const nonEmptyValuesCount = Object.values(values).filter(value => value !== "").length;
    if (nonEmptyValuesCount < 3) {
        throw Error("Ikke nok værdier - minimum 3");
    }

    values["messages"] = [];


    RunCalculate(values);

    return values;

}