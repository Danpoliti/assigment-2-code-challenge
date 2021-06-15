// document.addEventListener("DOMContentLoaded", function () {
//     console.log("Loaded!");

//     const form = document.getElementById("form");
//     const nickname = document.getElementById("nickname");
//     const comment = document.getElementById("comment");
//     const chat = document.getElementById("chat");
//     const db = firebase.firestore();

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();

//         if (nickname.value && comment.value) {
//             addComment(nickname.value, comment.value);
//             comment.value = "";
//         }
//     });

//     function addComment(nicknameValue, commentValue) {
//         db.collection("Comment")
//             .add({
//                 nickname: nicknameValue,
//                 comment: commentValue,
//                 timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//             })
//             .then(function (docRef) {
//                 console.log("Comment ID:", docRef.id);
//             })
//             .catch(function (error) {
//                 console.error("Error adding comment", error);
//             });
//     }

//     function deleteChat(id) {
//         db.collection("Comment").doc(id).delete().then(function () {
//             console.log('Document successfully deleted!');
//         }).catch(function (error) {
//             console.log("Error deleting document.", error);
//         });
//     }

//     function init() {
//         db.collection("Comment")
//             .orderBy("timestamp", "asc")
//             .onSnapshot(function (querySnapshot) {
//                 chat.innerHTML = "";
//                 querySnapshot.forEach((doc) => {
//                     const li = document.createElement("li");
//                     li.innerHTML = `${doc.data().nickname}: ${doc.data().comment}`;

//                     li.style = `background: #e9e9e9;
//             padding: 10px 26px;
//             margin: 10px 0;
//             border-radius: 40px;
//             width: fit-content;`;

//                     const span = document.createElement("span");
//                     span.innerHTML = " &#10005;";
//                     span.style = `margin: 0 16px 0 10px;
//             color: red; cursor: pointer;`;
//                     li.appendChild(span);
//                     console.log("id", doc.id);
//                     // span.onclick = ()=> console.log("Delete:", doc.id);
//                     span.onclick = () => deleteChat(doc.id);


//                     chat.appendChild(li);
//                 });
//             });
//     }

//     init();

    const dataRoot = document.getElementById("root");
    const dataImg = document.createElement("img");
    dataImg.setAttribute('class','logo');
    dataImg.src = 'logo.png'

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
                    movieImg.src = 'castle_poster.jpg'
                } else if (movie.title === 'Grave of the Fireflies') {
                    movieImg.src = 'fireflies.jpg'
                } else if (movie.title === 'My Neighbor Totoro') {
                    movieImg.src = 'totoro.jpg'
                } else if (movie.title === `Kiki's Delivery Service`) {
                    movieImg.src = 'kiki.jpg'
                } else if (movie.title === 'Only Yesterday') {
                    movieImg.src = 'only.jpg'
                } else if (movie.title === 'Porco Rosso') {
                    movieImg.src = 'porco.jpg'
                } else if (movie.title === 'Pom Poko') {
                    movieImg.src = 'pompoko.jpg'
                } else if (movie.title === 'Whisper of the Heart') {
                    movieImg.src = 'whisper.jpg'
                } else if (movie.title === 'Princess Mononoke') {
                    movieImg.src = 'mononoke.png'
                } else if (movie.title === 'My Neighbors the Yamadas') {
                    movieImg.src = 'yamada.jpg'
                } else if (movie.title === 'Spirited Away') {
                    movieImg.src = 'spiritedaway.jpg'
                } else if (movie.title === 'The Cat Returns') {
                    movieImg.src = 'catreturns.jpg'
                } else if (movie.title === `Howl's Moving Castle`) {
                    movieImg.src = 'moving.png'
                } else if (movie.title === 'Tales from Earthsea') {
                    movieImg.src = 'tales.jpg'
                } else if (movie.title === 'Ponyo') {
                    movieImg.src = 'ponyo.png'
                } else if (movie.title === 'Arrietty') {
                    movieImg.src = 'arrietty.png'
                } else if (movie.title === 'From Up on Poppy Hill') {
                    movieImg.src = 'poppyhill.jpg'
                } else if (movie.title === 'The Wind Rises') {
                    movieImg.src = 'windrises.jpg'
                } else if (movie.title === 'The Tale of the Princess Kaguya') {
                    movieImg.src = 'kaguya.jpg'
                } else if (movie.title === 'When Marnie Was There') {
                    movieImg.src = 'marnie.png'
                } else if (movie.title === 'The Red Turtle') {
                    movieImg.src = 'redturtle.png'
                }

                const title = document.createElement('h1');
                title.setAttribute('class', 'title');
                title.textContent = movie.title;

                const movieDescription = document.createElement('p');
                movieDescription.setAttribute('class', 'description');
                movie.description = movie.description.substring(0, 300);
                movieDescription.textContent = `${movie.description}...`;


                // const commentBox = document.createElement('form');
                // commentBox.setAttribute('class', 'comment-box');
                // commentBox.innerHTML = `<ul id="chat" style="list-style: none"></ul>`;


                container.appendChild(movieCard);
                // container.appendChild(commentBox);
                movieCard.appendChild(movieImg);
                movieCard.appendChild(title);
                movieCard.appendChild(movieDescription);

            })
        } else {
            console.log('error')
        }
    }

    request.send()

    //   updateChat("jWxC9PucIwVOahuSl0os", "Updated Hi!");


console.log("Ready!");




