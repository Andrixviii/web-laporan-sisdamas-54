import React from 'react';

interface Author {
  name: string;
  avatar: string;
  bio: string;
}

interface AuthorInfoProps {
  author: Author;
  publishedAt: string;
}

export const AuthorInfo: React.FC<AuthorInfoProps> = ({
  author,
  publishedAt,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="font-medium text-gray-900">{author.name}</h4>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>{new Date(publishedAt).toLocaleDateString()}</span>

        </div>
      </div>
    </div>
  );
};