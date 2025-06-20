
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

export const isActiveRoute = (currentPath: string, targetPath: string): boolean => {
  return currentPath === targetPath;
};
