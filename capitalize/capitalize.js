function capitalise(word) {
    let data = word.charAt(0).toUpperCase() + word.slice(1);
    return data
}

module.exports = capitalise;