//arr.forEach(item,)

// const output = arr.map(item => item,toString);

// const output = arr.filter(item => item !==2);

// const output = arr.reduce((pre, item) => pre+=item);

const animals = [
    'elephent', 'tiger', 'zebra', 'dragon', 'dog','blue-eyes white dragon'
];

const output = animals
    .filter(item => item !== 'elephent' && item !== 'blue-eyes white dragon')
    .map(item => item.toString())
    .reduce((prev, item) => prev+=item+ ',', 'Animals:')
    .slice(0,-1);