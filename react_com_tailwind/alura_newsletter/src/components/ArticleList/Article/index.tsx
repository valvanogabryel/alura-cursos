interface ArticleProps {
  title: string,
  text: string[],
  tags: string[],
  image?: string,
  alt?: string

};

const Article: React.FC<ArticleProps> = ({
  title,
  text,
  tags,
  image,
  alt
}) => {
  return (
    <article className="flex flex-col items-center bg-gray-200 duration-300 p-5 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg hover:-translate-y-1 hover:shadow-2xl">
      <h3 className="text-xl  text-blue-dark font-bold dark:text-gray-200">{title}</h3>
      <div className="justify-end gap-2 w-full pt-2 select-none cursor-pointer hidden sm:flex">
        {
          tags.map(tag =>
            <span
              key={tag}
              className='bg-blue-light uppercase duration-300 px-4 py-1 rounded-full text-xs text-gray-200 dark:bg-dark-100 dark:text-gray-400 hover:ring-2 hover:ring-blue-400 dark:hover:ring-blue-300'
            >
              {tag}
            </span>
          )
        }
      </div>
      <div className="grid gap-1 ">
        {
          text.map((content, index) =>
            <p
              key={index}
              className='mt-3 text-blue-dark dark:text-gray-400 line-clamp-6 sm:line-clamp-none'
            >
              {content}
            </p>
          )
        }
      </div>
      {
        image && alt && (
          <>
            <img src={image} alt={alt} className='sm:p-4' />
            <span className="sr-only">{alt}</span>
          </>
        )
      }
    </article>
  );
}

export default Article;