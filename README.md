# angular-template-loader
AngularJS webpack loader that inlines your templates into angular directives and components.

### Quick Links
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Requirements](#requirements)

### Installation
```bash
npm install angular-template-loader --save-dev
```

### Usage
**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ 'angular-template-loader' ]
      },
      {
        test: /\.html$/, 
        use: [ 'raw-loader' ]
      }
    ]
  }
}
```

### Options
|Name|Default|Description|
|:--:|:-----:|:----------|
|**`basePath`**|`''`|Path to resolve URLs|

### Requirements
To be able to use the template loader you must have a loader registered, which can handle `.html` files (for example [`raw-loader`](https://github.com/webpack/raw-loader) or [`html-loader`](https://github.com/webpack-contrib/html-loader)).
