import React from 'react';
import { Article } from '../../types';
import { AuthorInfo } from './AuthorInfo';
import { Clock, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onClick: (article: Article) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onClick,
  featured = false
}) => {
  const cardClasses = featured
    ? 'md:col-span-2 md:row-span-2'
    : '';

  return (
    <article
      onClick={() => onClick(article)}
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden ${cardClasses}`}
    >
      <div className="relative">
        <img
          src={article.imageUrl}
          alt={article.title}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            featured ? 'h-64 md:h-80' : 'h-48'
          }`}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {article.category}
          </span>
        </div>
        {article.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <Clock className="w-4 h-4" />
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>

        <h2 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 ${
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        }`}>
          {article.title}
        </h2>

        <p className={`text-gray-600 mb-4 ${featured ? 'text-base' : 'text-sm'}`}>
          {article.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <AuthorInfo
            author={article.author}
            publishedAt={article.publishedAt}
          />
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
        </div>
      </div>
    </article>
  );
};