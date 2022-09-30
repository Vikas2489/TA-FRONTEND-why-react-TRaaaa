let input = document.body.querySelector('input[type=text]');
let rootUl = document.body.querySelector('ul');


let allmovies = [{
        name: "Inception",
        watched: false
    },
    {
        name: "3 Idiots",
        watched: false
    },
    {
        name: "Avatar",
        watched: false
    },
];


function createUI(rootElm) {
    rootElm.innerHTML = "";
    allmovies.forEach((movie, index) => {
        let li = document.createElement('li');
        li.className = "flex";
        let h2 = document.createElement('h2');
        let button = document.createElement('button');
        button.setAttribute('type', "button");
        h2.innerText = movie.name;
        button.innerText = 'To Watch';
        button.addEventListener('click', (e) => {
            movie.watched = movie.watched ? false : true;
            event.target.innerText = movie.watched ? "watched" : "to watch"
        });
        li.append(h2, button);
        rootElm.append(li);
    });
}

input.addEventListener("keyup", (e) => {
    if (event.keyCode == 13) {
        if (event.target.value) {
            var movie = {
                name: event.target.value,
                watched: false
            };
            allmovies.push(movie);
            createUI(rootUl);
            event.target.value = "";
        }
    }
});

createUI(rootUl);