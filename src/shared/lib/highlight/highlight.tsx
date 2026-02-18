import React from 'react';

/**
 * Выделяет заданные подстроки в тексте, оборачивая их в span с указанным CSS-классом.
 * @param text - исходный текст
 * @param substrings - массив подстрок для выделения
 * @param className - CSS-класс для выделения
 * @returns React-узел с выделенными частями
 */
export const highlightSubstrings = (
  text: string,
  substrings: string[],
  className: string
): React.ReactNode => {
  if (!substrings.length) return text;

  // Экранируем спецсимволы для безопасного RegExp
  const escaped = substrings.map(s =>
    s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi');

  const parts = text.split(regex);
  return parts.map((part, index) => {
    const shouldHighlight = substrings.some(
      sub => sub.toLowerCase() === part.toLowerCase()
    );
    return shouldHighlight ? (
      <span key={index} className={className}>
        {part}
      </span>
  ) : (
      part
    );
  });
};