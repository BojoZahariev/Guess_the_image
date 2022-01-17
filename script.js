const imgHolder = document.getElementById('imgHolder');
const description = document.getElementById('description');

getPics = async () => {
  try {
    const response = await fetch("https://api.unsplash.com/search/photos/?client_id=uR_SC9lsIk-CaquQQ0F92ZEqvvxmgbvn3mC8T64stGQ&query=dog", {

      // const response = await fetch("https://api.unsplash.com/photos/random?client_id=uR_SC9lsIk-CaquQQ0F92ZEqvvxmgbvn3mC8T64stGQ", {
     
     //api.unsplash.com/search/photos?query=wanderlust 
    //  https://api.unsplash.com/search/photos?page=1&query=SEARCH_QUERY
    });
    const fetchedData = await response.json();
    console.log(fetchedData.results);
    imgHolder.src = fetchedData.results[0].urls.regular;
    
    if(fetchedData[0].description) {
      
    description.textContent = fetchedData[0].description;
    }


  } catch (err) {
    console.log(err);

  }
};




getPics();