const imgHolder = document.getElementById('imgHolder');
const description = document.getElementById('description');

getPics = async () => {
  try {
    const response = await fetch("https://api.unsplash.com/photos/random/?client_id=uR_SC9lsIk-CaquQQ0F92ZEqvvxmgbvn3mC8T64stGQ", {
     
     
    });
    const fetchedData = await response.json();
    console.log(fetchedData);
    imgHolder.src = fetchedData.urls.regular;
    
    if(fetchedData.description) {
      
    description.textContent = fetchedData.description;
    }


  } catch (err) {
    console.log(err);

  }
};




getPics();