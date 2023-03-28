interface ArticleProps {
  item: {
    title: string,
    text: string[],
    tags: string[],
    image?: string,
    alt?: string
  }
};

const Article: React.FC<ArticleProps> = ({ item }) => {
  const {
    title,
    text,
    tags,
    image,
    alt
  } = item;

  return (
    <div>
      <h3>{title}</h3>
      <div>
        {
          text.map((content, index) =>
            <p key={index}>{content}</p>
          )
        }
      </div>
    </div>
  );
}

export default Article;