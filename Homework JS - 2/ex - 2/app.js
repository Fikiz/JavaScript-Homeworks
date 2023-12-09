let year = prompt("Enter a year to find the Chinese Zodiac sign:");


if (!isNaN(year) && year !== null) {
  
    let zodiacIndex = (year - 4) % 12;

    let zodiacSigns = [
        "Rat", "Ox", "Tiger", "Rabbit",
        "Dragon", "Snake", "Horse", "Goat",
        "Monkey", "Rooster", "Dog", "Pig"
     ];
  
    let zodiacSign = zodiacSigns[zodiacIndex];
    alert(`The Chinese Zodiac sign for the year ${year} is ${zodiacSign}.`);
} 
else {

    alert("Please enter a valid year.");
}
