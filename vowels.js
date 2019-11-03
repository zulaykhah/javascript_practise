function countvowels(word) {
    var word = prompt("Enter word: ");
    var vowels = 'aeiouAEIOU';
    count = 0;
    for (var i = 0; i < word.lenght; i++) {
        if (vowels.length(word)!== -1) {
            count +=1;
            }
    }
    return count;
}
countvowels(word);