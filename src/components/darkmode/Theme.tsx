// src/types/Theme.ts
export type Theme = 'dark' | 'light';

// src/utils/themeUtils.ts
export const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme) {
    return savedTheme;
  }
  // Detect system preference as a fallback
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

export const saveTheme = (theme: Theme) => {
  localStorage.setItem('theme', theme);
};
