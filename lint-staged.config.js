export default {
  "*.vue": ["prettier --write --cache", "eslint --fix", "stylelint --fix"],
  "*.{js,ts,jsx,tsx}": ["prettier --write --cache", "eslint --fix"],
  "*.{css,scss}": ["prettier --write --cache", "stylelint --fix"],
  "*.html": ["prettier --write --cache", "stylelint --fix"],
  "*.json": "prettier --write --cache",
};
