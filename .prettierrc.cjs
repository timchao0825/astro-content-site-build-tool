module.exports = {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tabWidth: 2,
  semi: false,
  printWidth: 120, //一行的字符數，如果超過會進行換行，默認為80
  singleQuote: true,
  arrowParens: 'avoid',
  bracketSpacing: true, // 物件中列印空格
  trailingComma: 'none', // 添加"逗號," "all 全加" "none 取消"
  ignorePath: '.prettierignore',
}
