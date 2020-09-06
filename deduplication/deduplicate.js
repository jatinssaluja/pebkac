module.exports.deduplicate = function (wordList){
return [...new Set(wordList)];
};