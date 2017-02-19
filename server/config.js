export default {
  mongoUri: process.env.MongoUri || 'mongodb://localhost:27017/chatz',
  port: process.env.PORT || '8080',
};
