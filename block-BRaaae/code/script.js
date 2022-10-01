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
        } else if (key.startsWith('on')) {
            let eventType = key.replace('on', '');
            element.addEventListener(eventType, attr[key]);
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

function handleChange(e) {
    let id = e.target.id;
    allmovies[id].watched = allmovies[id].watched ? false : true;
    createUI(rootUl);
}


function createUI(rootElm) {
    let movieListUI = allmovies.map((movie, index) => {
        let li = React.createElement('li', { className: 'flex' },
            React.createElement('h2', {}, movie.name),
            React.createElement('button', { type: 'button', id: index, onclick: handleChange }, movie.watched ? 'Watched' : 'To Watch'));
        return li;
    });
    ReactDOM.render(movieListUI, rootElm);
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