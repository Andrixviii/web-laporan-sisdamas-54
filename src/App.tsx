import { useState, useMemo } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ArticleList } from './components/article/ArticleList';
import { ArticleDetail } from './components/article/ArticleDetail';
import { CategoryFilter } from './components/ui/CategoryFilter';
import { articles, categories } from './data/articles';
import { Article } from './types';

function Home() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = !selectedCategory || 
                             categories.find(cat => cat.id === selectedCategory)?.name === article.category;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedArticle(null);
  };

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setSelectedArticle(null);
  };

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onSearch={handleSearch} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ArticleDetail
            article={selectedArticle}
            onBack={handleBackToList}
          />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div>
          <div>
            {/* Hero Section */}
            <section id='home' className="bg-gradient-to-r from-[#3D1E24] to-[#BF9364] rounded-lg text-white p-8 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold">
                KKN SISDAMAS 54
              </h1>
              <p className='mb-4 text-xs'>Desa Harumansari, Kec. Kadungora, Kab. Garut</p>
              <p className="text-base text-green-100 mb-6">
                Platform untuk mendokumentasikan pengalaman
                selama kegiatan Kuliah Kerja Nyata (KKN) di Desa Harumansari.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-[#3D1E24]">
                <span className="bg-[#CCC08B] px-3 py-1 rounded-full">
                  {articles.length} Artikel
                </span>
                <span className="bg-[#CCC08B] px-3 py-1 rounded-full">
                  {categories.length} Kategori
                </span>
              </div>
            </section>

            {/* Category Filter */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter Berdasarkan Kategori</h2>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
              />
            </div>

            {/* Results Info */}
            <div className="mb-6">
              <p className="text-gray-600">
                {searchQuery && (
                  <span>Search results for "{searchQuery}" • </span>
                )}
                Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Article List */}
            <ArticleList
              articles={filteredArticles}
              onArticleClick={handleArticleClick}
            />
          </div>
        </div>
      </main>
      
      {/* tetangkami */}
            <section id="tentang" className="mt-16 mb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Kami adalah kelompok mahasiswa Kuliah Kerja Nyata (KKN) SISDAMAS 54 UIN Sunan Gunung Djati Bandung yang
                        berdedikasi untuk mengembangkan dan mendokumentasikan kegiatan di Desa Harumansari,
                        Kecamatan Kadungora, Kabupaten Garut.
                    </p>
                    <img
                        src="https://ik.imagekit.io/kkn54harumansari/Lainnya/Dokumentasi.JPG?updatedAt=1753707035519"
                        alt="Dokumentasi"
                        className="p-7 w-full h-auto"
                    />
                    <p className="text-gray-600 mt-4">
                        Melalui platform ini, kami ingin membagikan pengalaman, hasil karya, dan
                        kontribusi yang telah kami lakukan selama masa pengabdian masyarakat.
                    </p>
                </div>
            </section>

      <Footer />
    </div>
  );
}

export default Home;