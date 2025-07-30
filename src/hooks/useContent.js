import { useState, useEffect } from 'react';

const useContent = (filename) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`/src/content/${filename}`);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error(`Error loading ${filename}:`, error);
        setContent('Content loading error...');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [filename]);

  return { content, loading };
};

export default useContent;