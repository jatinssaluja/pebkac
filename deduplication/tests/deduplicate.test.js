const deduplicate = require('../deduplicate').deduplicate;

describe('deduplicate',()=>{
  it('should return a word list without duplicates',()=>{

    const duplicatedWordList = [22,22,33,56,40,40];
    const deduplicatedWordList  = deduplicate(duplicatedWordList);
    expect(deduplicatedWordList).toIncludeSameMembers([...new Set(duplicatedWordList)]);
  
  });
});