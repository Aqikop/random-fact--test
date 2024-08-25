document.getElementById('factButton').addEventListener('click', displayDogFact);

function getDogFact() {
  return fetch('facts.json')
    .then(response => response.json())
    .then(data => {
      // Get a random index from the data
      const randomIndex = Math.floor(Math.random() * data.length);
      // Retrieve the 'fact' value at the random index
      return data[randomIndex].fact;
    })
    .catch(error => {
      console.error('Error:', error);
      return 'Sorry, there was an error loading the facts.';
    });
}

function displayDogFact() {
  getDogFact()
    .then(fact => {
      const factContainer = document.getElementById('factContainer');
      factContainer.textContent = fact;
    });
}


function getCatFact() {
  fetch('https://meowfacts.herokuapp.com/')
    .then(response => response.json())
    .then(data =>{
      const meowFact = data.data[0];
      document.getElementById('catfact') = meowFact;
    })
    .catch(error =>{
      console.error('Error catching meow fact:', error);
      document.getElementById('catfact').textContent = 'Sorry, we couldn\'t fetch a meow fact.';
    });
}