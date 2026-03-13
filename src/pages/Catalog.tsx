import { useState, useMemo } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductList from '../components/ProductList';
import SearchInput from '../components/SearchInput';
import SortSelect from '../components/SortSelect';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import type { SortOption } from '../types';

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState<SortOption>('rating_desc');
  const [page, setPage] = useState(1);
  const limit = 12;

  const { data: allProducts = [], isLoading, isError, error, refetch } = useProducts();
  const handleSearchChange = (newValue: string) => {
    setSearchTerm(newValue);
    setPage(1);
  };

  const handleSortChange = (newValue: SortOption) => {
    setSort(newValue);
    setPage(1);
  };

  const filteredAndSorted = useMemo(() => {
    let result = [...allProducts];

    const term = searchTerm.toLowerCase().trim();
    if (term) {
      result = result.filter((p) => p.name.toLowerCase().includes(term));
    }

    switch (sort) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating_desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name_asc':
        result.sort((a, b) => a.name.localeCompare(b.name, 'uk'));
        break;
    }

    return result;
  }, [allProducts, searchTerm, sort]);

  const totalPages = Math.ceil(filteredAndSorted.length / limit) || 1;
  const currentProducts = filteredAndSorted.slice((page - 1) * limit, page * limit);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage message={error?.message} onRetry={refetch} />;

  return (
    <div style={{ minHeight: 'calc(100VH - 230px)' }}>
      <header>
        <div className="controls">
          <SearchInput value={searchTerm} onChange={handleSearchChange} />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '20px'
          }}>
            <span style={{ color: 'rgb(24, 42, 66, 0.5)' }}>{filteredAndSorted.length} товаров</span>
            {filteredAndSorted.length > 1 && (
              <SortSelect value={sort} onChange={handleSortChange} />
            )}
          </div>

        </div>
      </header>

      {filteredAndSorted.length === 0 ? (
        <p>Товаров нет</p>
      ) : (
        <ProductList products={currentProducts} />
      )}

      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      )}
    </div>
  );
}