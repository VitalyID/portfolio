// static-html-projects/website-1/.eslintrc.js
// @ts-check

import htmlConfig from '../../configs/.eslintrc.html.js'; // Путь к общей HTML конфигурации
import tseslint from 'typescript-eslint';

export default tseslint.config(
  htmlConfig, // Используем общую HTML конфигурацию
  {
    // Здесь можно добавить правила, специфичные ТОЛЬКО для website-1
  },
  {
    // Игнорирования, специфичные ТОЛЬКО для website-1
  }
);
