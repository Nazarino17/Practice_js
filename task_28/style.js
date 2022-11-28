function londonCityHacker(journey) {
    let sum = 0;
    for ( let i = 0; i < journey.length; i++) {
        if ( typeof journey[i] === 'string'){
            sum += 2.4;
        } else {
            sum += 1.5;
            if ( typeof journey[i + 1] === 'number') i++;
        }

    }

    return `£${sum.toFixed(2)}`;
}

console.log(londonCityHacker([12, 'Central', 'Circle', 21]));