import dataList from '../../../articles.json';
import Article from './Article';

const ArticleList: React.FC = () => {
  return (
    <div className='mt-5 grid gap-5 m-auto max-w-2xl sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]'>
      {
        dataList.map(data => (
          <Article
            key={data.title}
            {...data}
          />
        ))
      }
    </div>
  );
}

export default ArticleList;