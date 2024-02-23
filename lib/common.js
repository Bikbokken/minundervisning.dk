export function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
export function radToDeg(radians) {
    return (180 / Math.PI) * radians;
}

export function IsNotNull(value) {
    if(value !== "" && value !== null) {
        return true;
    } 
    return false;
}

export function CheckNullValues(values) {
    for (const key in values) {
        if (values.hasOwnProperty(key)) {
            const value = values[key];
            if (value === null) {
                return true;
            }
        }
    }

    return false;
}
