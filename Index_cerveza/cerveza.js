const urlParams = new URLSearchParams(window.location.search);
const beers = urlParams.get("beers");

fetch("https://api.punkapi.com/v2/" + "beers")
  .then(function (res) {
    return res.json();
  })
  .then(function (beer) { 

  const node = document.getElementById("detail");
  beer.forEach(beers => {

  node.innerHTML += 
  `<p>${beers.name}</p>
  <img src="${beers.image_url}" />
  <p>${beers.id}</p>`;
      
    console.log(beers)})
    
  });

  function getID(param) {
    const results = param.split("/");
    return results[results.length - 2];
  }
  
