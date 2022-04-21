
export const openLink = (url: string, newTab?: boolean) => {
  return () => {
    if (newTab) {
      return window.open(url);
    } else {
      return window.open(url, '_self');
    }
  };
};