import Proptypes from 'prop-types';

function Article(props) {
  return (
    <div className="card mx-5 w-full">
      <div className="relative">
        <img className="object-contain" src={props.urlToImage} alt="" />
        <span className="photo_tag text-lg font-bold text-white px-5 py-3">
          {props.author.toUpperCase()}
        </span>
      </div>
      <div className="px-4 py-6">
        <h2 className="text-3xl font-bold ">{props.title}</h2>
        <span className="text-orange-600 text-2xl inline-block my-2.5">
          {props.description}
        </span>
        <p className="grey-text leading-7">{props.content}</p>
        <a
          href={props.url}
          className="my-7 inline-block rounded text-white bg-black px-5 py-3"
        >
          Read More.....
        </a>
      </div>
    </div>
  );
}

Article.propTypes = {
  author: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
  urlToImage: Proptypes.string.isRequired,
  publishedAt: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired,
};

export default Article;
