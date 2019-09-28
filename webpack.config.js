const webpack = {
  entry: './src/index.tsx',
  output: {
    filename: 'target/bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/react', '@babel/preset-typescript'],
              plugins: ['@babel/proposal-class-properties', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-syntax-dynamic-import']
            }
          }
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
      }
    ]
  }
};

module.exports = webpack;
