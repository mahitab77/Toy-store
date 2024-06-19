export const content = [
  './index.html',
  './js/**/*.js',
  './Css/**/*.css'
];
export const theme = {
  extend: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      'varela-round': ['Varela Round', 'sans-serif'],
    },
    colors: {
      'custom-green': '#a5c926',
      'custom-yellow': '#ffc12c',
      'custom-pink': '#fb416b',
    },
    height: {
      '465': '465px',
    },
    screens: {
      'tab': '992px',
      'md-mob': '475px',
      'sm-mob': '375px',
    },
  },
};
export const plugins = [];
