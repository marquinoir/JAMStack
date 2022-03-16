document.addEventListener("click", clickHandlers);

function clickHandlers(event) {
  console.log(event.target);
}

document.addEventListener("click", clickHandlers);


 API = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed"

 
function getStories(event) {
    fetch(API)
      .then((response) => response.json())
      .then((data) => showData(data.results));
  }
  
  function showData(stories) {
    var looped = stories
  
      .map(
        (result) => `
      <div class="item">
        <h3>${result.title}</h3>


        <img src="https://image.tmdb.org/t/p/w185/${result.poster_path}" 
         align="left">
        
        ${result.overview}
    
      </div>
    `
      )
      .join("");
  
    document.querySelector(".stories").innerHTML = looped;
  }
  
  getStories();