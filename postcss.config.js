module.exports = {
	plugins: [
	  require('tailwindcss'),
	  require('autoprefixer'),
	  require('@tailwindcss/postcss'), // This line is crucial
	],
  };