const imgHolder = document.getElementById('imgHolder');

const description = document.getElementById('list');

getPics = async (word) => {
  try {
    const response = await fetch("https://api.unsplash.com/search/photos/?client_id=uR_SC9lsIk-CaquQQ0F92ZEqvvxmgbvn3mC8T64stGQ&orientation=landscape&query=" + word, {

      // const response = await fetch("https://api.unsplash.com/photos/random?client_id=uR_SC9lsIk-CaquQQ0F92ZEqvvxmgbvn3mC8T64stGQ", {
     
     //api.unsplash.com/search/photos?query=wanderlust 
    //  https://api.unsplash.com/search/photos?page=1&query=SEARCH_QUERY
    });
    const fetchedData = await response.json();
    console.log(fetchedData.results);

    if(fetchedData.results.length) {
      imgHolder.src = fetchedData.results[0].urls.regular;

      
    }else{
      getWords();
    }
    
    
    // if(fetchedData[0].description) {
      
    // description.textContent = fetchedData[0].description;
    // }


  } catch (err) {
    console.log(err);

  }
};

getWords = async () => {
  try {
    const response = await fetch("https://random-word-form.herokuapp.com/random/noun?count=5", {

      // const response = await fetch("https://api.unsplash.com/photos/random?client_id=uR_SC9lsIk-CaquQQ0F92ZEqvvxmgbvn3mC8T64stGQ", {
     
     //api.unsplash.com/search/photos?query=wanderlust 
    //  https://api.unsplash.com/search/photos?page=1&query=SEARCH_QUERY
    });
    const fetchedData = await response.json();
    console.log(fetchedData);
    
    makeList(fetchedData);

    getPics(fetchedData[0]);
  } catch (err) {
    console.log(err);

  }
};


function makeList(data) {
  list.innerHTML = '';
data.forEach(element => {
  let listElem = document.createElement('li');
  listElem.textContent = element;
  list.appendChild(listElem);
});
}



getWords();
// getPics();