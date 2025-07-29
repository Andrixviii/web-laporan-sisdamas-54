import React from 'react';
import { Article } from '../../types';
import { AuthorInfo } from './AuthorInfo';
import { ArrowLeft, Share2, Bookmark, Heart } from 'lucide-react';
import { Button } from '../ui/Button';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  article,
  onBack
}) => {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Button
          variant="outline"
          onClick={onBack}
          className="mb-6 flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Artikel</span>
        </Button>

        <div className="mb-4">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            {article.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <AuthorInfo
            author={article.author}
            publishedAt={article.publishedAt}
          />
          
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-red-500 transition-colors duration-200">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-500 transition-colors duration-200">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-green-500 transition-colors duration-200">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-8">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Tags */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Author Bio */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="flex items-start space-x-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              About {article.author.name}
            </h3>
            <p className="text-gray-600">
              {article.author.bio}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};