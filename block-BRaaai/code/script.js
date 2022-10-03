let rootElement = document.querySelector('body');

let cardInfo = {
    title: 'City Lights in New York',
    date: new Date('2017-01-26'),
    comments: 67,
    subTitle: 'The city that never sleeps.',
    description: 'New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.',
    category: 'photos',
    imageURL: 'https://images.unsplash.com/photo-1610874933184-7728fd666162?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
};



function createUI(data, rootElm) {
    let header = ( <
        header className = "text-center py-5" >
        <
        h1 className = "text-3xl font-bold my-3" > All Articles < /h1> <
        p className = "underline text-xl  my-2" > Collection on best articles startups < /p> < /
        header >
    );

    let container_of_card = ( <
        main className = "container w-full" >
        <
        div className = "card mx-10 w-1/3" >
        <
        div className = "relative" >
        <
        img src = { data.imageURL }
        alt = "desert" / >
        <
        span className = "photo_tag text-lg font-bold text-white px-5 py-3" > { data.category } < /span> <
        p className = "absolute right-3 top-3 circle font-bold  inline-block orange_bg text-white" >
        26 Mar <
        /p> < /
        div > <
        div className = "px-4 py-6" >
        <
        h2 className = "text-3xl font-bold " > { data.title } < /h2> <
        span className = "text-orange-600 text-2xl inline-block my-2.5" > { data.subTitle } < /span> <
        p className = "grey-text leading-7" > { data.description } < /p> <
        div className = "flex justify-start my-4" >
        <
        p className = "grey-text" > < i className = "fa-solid fa-clock" > < /i> 6 min ago</p >
        <
        p className = "grey-text ml-4" > < i className = "fa-solid fa-comment" > < /i> {data.comments} Comments</p >
        <
        /div> < /
        div > <
        /div> < /
        main >
    );
    return ReactDOM.render([header, ], rootElm);

}