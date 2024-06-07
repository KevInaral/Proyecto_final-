import React from 'react';
import { useParams } from 'react-router-dom';

const articles = [
  { id: 1, title: 'The Water Crisis in Oaxaca', content: 'Detailed information about the water shortage issues in Oaxaca...' },
  { id: 2, title: 'Impact on Local Communities', content: 'How the water crisis affects local communities in Oaxaca...' },
  // Agrega más artículos aquí
];

const Article = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
