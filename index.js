if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

console.log('Environment under test: ', process.env.NODE_ENV);