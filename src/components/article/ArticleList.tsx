import React, { useState } from 'react';
import { Article } from '../../types';
import { ArticleCard } from './ArticleCard';
import { Button } from '../../components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ArticleListProps {
  articles: Article[];
  onArticleClick: (article: Article) => void;
}

const ARTICLES_PER_PAGE = 6;

export const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  onArticleClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
      </div>
    );
  }

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const totalPages = Math.ceil(regularArticles.length / ARTICLES_PER_PAGE);
  const startIdx = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = regularArticles.slice(startIdx, startIdx + ARTICLES_PER_PAGE);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div id="artikel" className="space-y-8">
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
      {currentArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {featuredArticles.length > 0 ? 'Artikel Lainnya' : 'Semua Artikel'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={onArticleClick}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? 'primary' : 'outline'}
                  onClick={() => goToPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
