document.querySelector('.generate-btn').onclick = function(e) {
  e.preventDefault();
  const smallLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
  const capitalLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
  const numbers=["0","1","2","3","4","5","6","7","8","9"];
  const symbols=["!","@","#","$","%","&","*","(",")","/",",","'",":",";"];
  
  const generatedPassword = generatePassword(smallLetters, capitalLetters, numbers, symbols);
  document.querySelector('.password-field').value = generatedPassword;
  
  document.querySelector('.copy-password').addEventListener('click', function(e){
    e.preventDefault();
    navigator.clipboard.writeText(generatedPassword);
    const tooltip = document.querySelector('.tooltip');
      tooltip.classList.add('show')
    setTimeout(() => {
      tooltip.classList.remove('show');
    }, 2000);
  })
}

function generatePassword(smallLetters, capitalLetters, numbers, symbols) {
  function randomLetters(letterArray) {
    const length = letterArray.length;
    const randomIndex = Math.floor(Math.random() * length);
    return letterArray[randomIndex];
  }

  function randomSymbols(symbols) {
    const length = symbols.length;
    const randomIndex = Math.floor(Math.random() * length);
    return symbols[randomIndex];
  }

  function randomNumbers(numbers) {
    const length = numbers.length;
    const randomIndex = Math.floor(Math.random() * length);
    return numbers[randomIndex];
  }

  const password = randomLetters(smallLetters) + randomLetters(smallLetters) + randomLetters(capitalLetters) + randomLetters(smallLetters) + randomNumbers(numbers) + randomSymbols(symbols) + randomSymbols(symbols) + randomLetters(capitalLetters) + randomNumbers(numbers) + randomNumbers(numbers);
  
  return password;
}
