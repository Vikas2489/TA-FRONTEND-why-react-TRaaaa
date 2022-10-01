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

function createElement(type, attr = {}, ...children) {
    let element = document.createElement(type);
    for (let key in attr) {
        if (key.startsWith("data-")) {
            element.setAttribute(key, attr[key]);
        } else {
            element[key] = attr[key];
        }
    }
    children.forEach(child => {
        if (typeof child === 'object') {
            element.append(child);
        } else if (typeof child === 'string') {
            let node = document.createTextNode(child);
            element.append(node);
        }
    });
    return element;
}



function createUI(rootElm) {
    rootElm.innerHTML = "";
    allmovies.forEach((movie, index) => {
        let li = createElement('li', { className: 'flex' },
            createElement('h2', {}, movie.name),
            createElement('button', { type: 'button', "data-id": index }, 'To Watch'));

        rootElm.append(li);
    });
};

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