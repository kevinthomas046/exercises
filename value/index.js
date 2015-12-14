function valueGetter (input) {
    if ( typeof input === "function" ) {
        return valueGetter(input.call());
    } else {
        return input;
    }
};
module.exports = valueGetter;