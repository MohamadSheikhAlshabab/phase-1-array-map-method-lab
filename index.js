const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(element => {
    let partialArr =  element.split(' ');
    const capitalizeWord = [];
    partialArr.map( word => capitalizeWord.push(word[0].toUpperCase() + word.slice(1)))
    return capitalizeWord.join(' ')
  })
}