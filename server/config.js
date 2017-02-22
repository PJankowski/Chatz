export default {
  mongoUri: process.env.MongoUri || 'mongodb://localhost:27017/chatz',
  port: process.env.PORT || '8080',
  isDeveloping: process.env.NODE_ENV !== 'production',
  jwt_secret: process.env.JTW_Secret || 'shhh',
};
