const imgHolder = document.getElementById('imgHolder');
const coverDiv= document.getElementById('coverDiv');
const list = document.getElementById('list');

getPics = async (word) => {
  try {
    const response = await fetch("https://api.unsplash.com/search/photos/?client_id=uR_SC9lsIk-CaquQQ0F92ZEqvvxmgbvn3mC8T64stGQ&orientation=landscape&query=" + word, {

     
    });
    const fetchedData = await response.json();
    console.log(fetchedData.results);

    if(fetchedData.results.length) {
      imgHolder.src = fetchedData.results[0].urls.regular;

      
    }else{
      getWords();
    }
    
  } catch (err) {
    console.log(err);

  }
};



getPic2 =  (word) => {
  fetch("https://api.pexels.com/v1/search?query=" + word + "&per_page=1", {
	
	"headers": {
		"authorization": "563492ad6f917000010000017a53b03de08849d79c05b0cf2e44a408"
	}
})
.then(resp => {
  return resp.json()
})
.then(data => {
  console.log(data);
  if(data.photos.length > 0) {
    imgHolder.style.backgroundImage = "url(" + data.photos[0].src.landscape + ")";
    list.style.display = 'block';
  }else{
    getWords();
  }
  
})
.catch(err => {
	console.error(err);
});
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

    getPic2(fetchedData[0]);
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

listElem.addEventListener("click", function(){
  coverDiv.style.display = 'none';
});


});
}




getWords();
// getPics();