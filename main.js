const loadJoke = async () => {
    try {
      const chuckNorrisFetch = await fetch("https://api.chucknorris.io/jokes/random", {
        headers: {
          "Accept": "application/json" 
        }
      });
      const jokesData = await chuckNorrisFetch.json();

  
      document.getElementById("loading-joke").innerText = jokesData.value;
    } catch (error) {
      console.log(error);
    }
  };
  

  document.getElementById("load-Joke-Btn").addEventListener("click", loadJoke);
  