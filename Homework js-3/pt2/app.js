function convertAge(species, age) {
    if (species === 'dog') {
        const dogYears = age * 7;
        console.log(`${age} human years is approximately ${dogYears} dog years.`);
        return dogYears;
    } else if (species === 'human') {
        const humanYears = age / 7;
        console.log(`${age} dog years is approximately ${humanYears} human years.`);
        return humanYears;
    } else {
        console.log('Invalid species. Please provide "dog" or "human".');
        return undefined;
    }
}


convertAge('dog', 8); 


convertAge('human', 28); 


convertAge('cat', 5); 
