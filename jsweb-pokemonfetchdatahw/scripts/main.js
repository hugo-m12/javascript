        
        const pokemonList = document.querySelector("#pokemonList");
        const loading = document.querySelector("#loading");


        fetch("https://pokeapi.co/api/v2/pokemon/258/").then(function (response) {


            response.json().then(function (body) {
                loading.style.display = "none";
                pokemonList.innerHTML += `<h1> POKEMON# </h1>`;
                pokemonList.innerHTML += `<h2 style="color:red">${body.id}</h2>`;
                pokemonList.innerHTML += `<img src="${body.sprites.other[`official-artwork`].front_default}" alt="pokemon_sprite">`;
                pokemonList.innerHTML += `<h3 style="text-transform: uppercase; font-size: xx-large;">${body.name}</h3>`;
                pokemonList.innerHTML += `<li> Weight: ${body.weight} </li>`;
                pokemonList.innerHTML += `<li> Height: ${body.height} </li>`;
                pokemonList.innerHTML += `Cry:<input type="button" value="▶️" onclick="playMusic()" /> `;
                pokemonList.innerHTML += `<li style="text-transform: capitalize; color: #4592c4;"> Type: ${body.types[0].type.name} </li>`;
            });

            
        });
        function playMusic(){
            const music = new Audio('https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/258.ogg');
            music.play();
        }