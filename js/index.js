const container = document.getElementById('number-container');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberLength = 9;

// Create div dynamically with sorted numbers
function createSortedNumber() {
    container.innerHTML = '';
    numbers.forEach((number, index) => {
        const numberDiv = document.createElement("div");
        numberDiv.classList.add('number-list-'+(index+1));             
        numberDiv.innerHTML = number;                
        container.appendChild(numberDiv);
    });
}

// Call the menthod on load of page
createSortedNumber();

// Create div dynamically with shuffled numbers
function createShuffledNumber() {
  container.innerHTML = '';
  const number = shuffle();
  for(let i = 0; i < numberLength; i++) {
    const numberDiv = document.createElement("div");
    numberDiv.classList.add('number-list-'+(i+1));         
    numberDiv.innerHTML = number[i];                
    container.appendChild(numberDiv);
  }
}

// Create an array of shuffled numbers between 1 to 9
function shuffle() {
    const numberSet = new Set();
    while(numberSet.size !== 9) {
        // It will get random values between 0 to 9
        const randomValue = Math.floor(Math.random() * 10);

        // Change 0 to 1 as we need to shuffle numbers between 1 to 9
        const filteredValue = (randomValue === 0 ? 1 : randomValue)
        numberSet.add(filteredValue);
    }
    // create an ouput of array out of set and return the array
    return Array.from(numberSet);
}


