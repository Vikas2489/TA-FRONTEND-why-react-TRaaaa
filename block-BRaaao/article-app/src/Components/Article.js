let monthName = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

function Article(data) {
  return (
    <section className="flex p-4  container m-auto  py-10">
      <div className="card mx-5 w-full">
        <div className="relative">
          <img src={data.article.urlToImage} alt="" />
          <span className="photo_tag text-lg font-bold text-white px-5 py-3">
            {data.article.author}
          </span>
          <p className="absolute right-3 top-3 circle font-bold  inline-block orange_bg text-white">
            {new Date(data.article.publishedAt).getDate() +
              ' ' +
              monthName[new Date(data.article.publishedAt).getMonth()]}
          </p>
        </div>
        <div className="px-4 py-6">
          <h2 className="text-3xl font-bold ">{data.article.title}</h2>
          <span className="text-orange-600 text-2xl inline-block my-2.5">
            {data.article.description}
          </span>
          <p className="grey-text leading-7">{data.article.content}</p>
          <a
            href={data.article.url}
            className="my-7 inline-block rounded text-white bg-black px-5 py-3"
          >
            Read More.....
          </a>
        </div>
      </div>
      //{' '}
    </section>
  );
}

// {
//     author: 'Omkar Godbole',
//     title: 'Third Halving Turns Out to Be Non-Event for Bitcoin’s Price',
//     description:
//       "Bitcoin's price volatility has declined following the network's third mining reward halving event on Monday.",
//     url: 'https://www.coindesk.com/third-blockchain-halving-turns-out-non-event-bitcoins-price',
//     urlToImage:
//       'https://static.coindesk.com/wp-content/uploads/2020/05/btc-chart-may-12-1200x628.png',
//     publishedAt: '2020-05-12T11:40:34Z',
//     content:
//       "Bitcoin's price volatility has declined following the network's third mining reward halving event on Monday.  \r\nThe reward per block mined on bitcoin's blockchain was reduced to 6.25 BTC from 12.5 BTC at 19:23 UTC, when the cryptocurrency was trading near $8,… [+3792 chars]",
//   },

export function Articles(array) {
  console.log(array, 'array');
  return array.article.map((article, index) => {
    return (
      <>
        <Article key={index} article={article} />
      </>
    );
  });
}

export default Article;
