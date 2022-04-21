
export const openLink = (url: string, newTab?: boolean) => {
  return () => {
    if (newTab) {
      return window.open(url, '_blank');
    } else {
      return window.open(url);
    }
  };
};