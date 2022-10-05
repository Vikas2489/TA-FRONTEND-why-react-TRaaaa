import Article from './Article';
import allArticles from '../data/data';

function Articles() {
  return (
    <section className="p-4 container m-auto  py-10">
      {allArticles.map((article, index) => {
        return (
          <>
            <Article key={article.publishedAt} {...article} />
          </>
        );
      })}
    </section>
  );
}
export default Articles;
