import React from 'react';
import { Article } from '../../types';
import { ArticleCard } from './ArticleCard';

interface ArticleListProps {
  articles: Article[];
  onArticleClick: (article: Article) => void;
}

export const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  onArticleClick
}) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
      </div>
    );
  }

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div id='artikel' className="space-y-8">
      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Artikel Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={onArticleClick}
                featured
              />
            ))}
          </div>
        </section>
      )}

      {/* Regular Articles */}
      {regularArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {featuredArticles.length > 0 ? 'Latest Articles' : 'All Articles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={onArticleClick}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};