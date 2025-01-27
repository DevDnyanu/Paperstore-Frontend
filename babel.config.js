module.exports = {
    presets: [
      '@babel/preset-env', // For modern JavaScript
      '@babel/preset-react' // For React JSX support
    ],
    plugins: [
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-proposal-private-property-in-object' // This plugin fixes your issue
    ]
  };
  