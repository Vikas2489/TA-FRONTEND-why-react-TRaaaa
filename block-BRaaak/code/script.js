let rootElement = document.querySelector('main');

let articles = [
  {
    title: 'City Lights in New York',
    date: new Date('2017-01-26'),
    comments: 67,
    subTitle: 'The city that never sleeps.',
    description:
      'New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.',
    category: 'photos',
    imageURL:
      'https://images.unsplash.com/photo-1610874933184-7728fd666162?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Twitter’s decentralized future',
    date: new Date('2021-01-16'),
    comments: 43,
    subTitle: 'The decentralized future of twitter.',
    description:
      'The platform’s vision of a sweeping open standard could also be the far-right’s internet endgame',
    category: 'social network',
    imageURL:
      'https://techcrunch.com/wp-content/uploads/2019/09/twitter-hidden-replies1.png?resize=1536,816',
  },
  {
    title: 'Startups look beyond lidar for autonomous vehicle perception',
    date: new Date('2017-07-26'),
    comments: 17,
    subTitle:
      'Lidar pushed ahead of traditional cameras because it could do things they couldn’t',
    description:
      'Last CES was a time of reckoning for lidar companies, many of which were cratering due to a lack of demand from a (still) non-existent autonomous vehicle industry. ',
    category: 'future',
    imageURL:
      'https://techcrunch.com/wp-content/uploads/2019/07/GettyImages-846875220.jpg?w=1390&crop=1',
  },
];

function createUI(data, rootElm) {
  let header = (
    <header className="text-center py-5">
      <h1 className="text-3xl font-bold my-3">All Articles</h1>
      <p className="underline text-xl  my-2">
        Collection on best articles startups
      </p>
    </header>
  );
  // Component
  let Card = (props) => {
    return (
      <>
        <div className="card mx-10 w-1/3">
          <div className="relative">
            <img src={props.article.imageURL} alt="desert" />
            <span className="photo_tag text-lg font-bold text-white px-5 py-3">
              {props.article.category}
            </span>
            <p className="absolute right-3 top-3 circle font-bold  inline-block orange_bg text-white">
              {props.article.date.toDateString().split(' ')[2] +
                ' ' +
                props.article.date.toDateString().split(' ')[1]}
            </p>
          </div>
          <div className="px-4 py-6">
            <h2 className="text-3xl font-bold ">{props.article.title}</h2>
            <span className="text-orange-600 text-2xl inline-block my-2.5">
              {props.article.subTitle}
            </span>
            <p className="grey-text leading-7">{props.article.description}</p>
            <div className="flex justify-start my-4">
              <p className="grey-text">
                <i className="fa-solid fa-clock"></i> 6 min ago
              </p>
              <p className="grey-text ml-4">
                <i className="fa-solid fa-comment"></i> {props.article.comments}{' '}
                Comments
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  let UI = data.map((article) => {
    return (
      <>
        <Card article="article" />
      </>
    );
  });
  return ReactDOM.render([header, UI], rootElm);
}

createUI(articles, rootElement);
