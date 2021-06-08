<script>
    function select(link) {
        
    } select(link) {
        const item = link.parentNode;
        const tabs = item.parentNode;
        const index = Array.prototype.indexOf.call(tabs.children, item);
        const item = tabs.querySelectorAll('.tab-item');

        tabs.style.setProperty('--index', index + 1);
        items.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
        
    }
</script>

const urlParams = new URLSearchParams(window.location.search);
const beers = urlParams.get("beers");

fetch("https://api.punkapi.com/v2/" + beers)
  .then(function (res) {
    return res.json();
  })
/*   .then(function (pokemon) {
    console.log(pokemon);
    const node = document.getElementById("detail");
    node.innerHTML += `<p>${pokemon.species.name}</p><img src="${pokemon.sprites.front_default}" />`;
  });
 */
