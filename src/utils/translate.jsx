import React from 'react';

// Returns JSX elements styled with Kannada custom fonts when in 'kn' mode, or pure English text when in 'en' mode.
export const t = (text, language = 'kn') => {
  if (typeof text !== 'string') return text;
  if (text.includes(' / ')) {
    const [kn, en] = text.split(' / ');
    if (language === 'en') {
      return en;
    } else {
      return (
        <>
          <span className="font-kannada">{kn}</span>
          <span className="text-zinc-500 font-light mx-1">/</span>
          <span>{en}</span>
        </>
      );
    }
  }
  return text;
};

// Returns a plain string (bilingual formatted in 'kn' mode, or English only in 'en' mode). Useful for placeholders, titles, and values.
export const tStr = (text, language = 'kn') => {
  if (typeof text !== 'string') return text;
  if (text.includes(' / ')) {
    const [kn, en] = text.split(' / ');
    return language === 'en' ? en : `${kn} / ${en}`;
  }
  return text;
};
