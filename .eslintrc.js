module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'prettier',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	// 코드 정리 플러그인 추가
	plugins: ['prettier'],
	// 사용자 편의 규칙 추가
	rules: {
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
};
