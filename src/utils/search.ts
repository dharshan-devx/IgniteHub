export const filterBySearchTerm = <T extends { title?: string; name?: string; description?: string }>(
  items: T[],
  searchTerm: string
): T[] => {
  if (!searchTerm.trim()) return items;

  const lowercaseSearch = searchTerm.toLowerCase();

  return items.filter(item => {
    const title = item.title || item.name || '';
    const description = item.description || '';
    return (
      title.toLowerCase().includes(lowercaseSearch) ||
      description.toLowerCase().includes(lowercaseSearch)
    );
  });
};

export const sortItems = <T extends { title?: string; name?: string; resources?: any[] }>(
  items: T[],
  sortBy: string
): T[] => {
  const sortedItems = [...items];

  switch (sortBy) {
    case 'name':
      return sortedItems.sort((a, b) => {
        const nameA = a.title || a.name || '';
        const nameB = b.title || b.name || '';
        return nameA.localeCompare(nameB);
      });

    case 'name-desc':
      return sortedItems.sort((a, b) => {
        const nameA = a.title || a.name || '';
        const nameB = b.title || b.name || '';
        return nameB.localeCompare(nameA);
      });

    case 'resources':
      return sortedItems.sort((a, b) => (b.resources?.length || 0) - (a.resources?.length || 0));

    case 'resources-asc':
      return sortedItems.sort((a, b) => (a.resources?.length || 0) - (b.resources?.length || 0));

    default:
      return sortedItems;
  }
};
