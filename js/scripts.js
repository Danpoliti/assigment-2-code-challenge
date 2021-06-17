
    const dataRoot = document.getElementById("root");
    const dataImg = document.createElement("img");
    dataImg.setAttribute('class','logo');
    dataImg.src = 'img/logo.png'

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    dataRoot.appendChild(dataImg);
    dataRoot.appendChild(container);

    var request = new XMLHttpRequest();

    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            data.forEach((movie) => {
                console.log(movie.title);
                const movieCard = document.createElement('div');
                movieCard.setAttribute('class', 'card');

                const movieImg = document.createElement('img');
                movieImg.setAttribute('class', 'movie-img');


                if (movie.title === 'Castle in the Sky') {
                    movieImg.src = 'img/castle_poster.jpg'
                } else if (movie.title === 'Grave of the Fireflies') {
                    movieImg.src = 'img/fireflies.jpg'
                } else if (movie.title === 'My Neighbor Totoro') {
                    movieImg.src = 'img/totoro.jpg'
                } else if (movie.title === `Kiki's Delivery Service`) {
                    movieImg.src = 'img/kiki.jpg'
                } else if (movie.title === 'Only Yesterday') {
                    movieImg.src = 'img/only.jpg'
                } else if (movie.title === 'Porco Rosso') {
                    movieImg.src = 'img/porco.jpg'
                } else if (movie.title === 'Pom Poko') {
                    movieImg.src = 'img/pompoko.jpg'
                } else if (movie.title === 'Whisper of the Heart') {
                    movieImg.src = 'img/whisper.jpg'
                } else if (movie.title === 'Princess Mononoke') {
                    movieImg.src = 'img/mononoke.png'
                } else if (movie.title === 'My Neighbors the Yamadas') {
                    movieImg.src = 'img/yamada.jpg'
                } else if (movie.title === 'Spirited Away') {
                    movieImg.src = 'img/spiritedaway.jpg'
                } else if (movie.title === 'The Cat Returns') {
                    movieImg.src = 'img/catreturns.jpg'
                } else if (movie.title === `Howl's Moving Castle`) {
                    movieImg.src = 'img/moving.png'
                } else if (movie.title === 'Tales from Earthsea') {
                    movieImg.src = 'img/tales.jpg'
                } else if (movie.title === 'Ponyo') {
                    movieImg.src = 'img/ponyo.png'
                } else if (movie.title === 'Arrietty') {
                    movieImg.src = 'img/arrietty.png'
                } else if (movie.title === 'From Up on Poppy Hill') {
                    movieImg.src = 'img/poppyhill.jpg'
                } else if (movie.title === 'The Wind Rises') {
                    movieImg.src = 'img/windrises.jpg'
                } else if (movie.title === 'The Tale of the Princess Kaguya') {
                    movieImg.src = 'img/kaguya.jpg'
                } else if (movie.title === 'When Marnie Was There') {
                    movieImg.src = 'img/marnie.png'
                } else if (movie.title === 'The Red Turtle') {
                    movieImg.src = 'img/redturtle.png'
                }

                const title = document.createElement('h1');
                title.setAttribute('class', 'title');
                title.textContent = movie.title;

                const movieDescription = document.createElement('p');
                movieDescription.setAttribute('class', 'description');
                movie.description = movie.description.substring(0, 300);
                movieDescription.textContent = `${movie.description}...`;





                container.appendChild(movieCard);
                movieCard.appendChild(movieImg);
                movieCard.appendChild(title);
                movieCard.appendChild(movieDescription);

            })
        } else {
            console.log('error')
        }
    }

    request.send()


console.log("Ready!");




