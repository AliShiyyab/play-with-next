// i18n.js

const NextI18Next = require('next-i18next').default;

const options = {
	defaultLanguage: 'en',
	otherLanguages: ['ar'],
};

module.exports = new NextI18Next(options);
