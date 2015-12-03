module.exports = {
  User: require('./user'),
  Book: require('./book'),
  CheckIn: require('./check-in'),

  oauth: {
    AccessTokens: require('./oauth/access-tokens'),
    RefreshTokens: require('./oauth/access-refresh-tokens'),
    Clients: require('./oauth/clients'),
  },
};
