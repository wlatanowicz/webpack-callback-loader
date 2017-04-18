# webpack-callback-loader

It can be used to wrap any js function as webpack loader without creating dedicated module.
 
## Installation

package.json:
```json
{
  "dependencies": {
    "webpack-callback-loader" : "wlatanowicz/webpack-callback-loader"
  }
}
```

## Usage

webpack.config.json:
```javascript
module.exports = {
    //...
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: "webpack-callback-loader",
                query: {
                    callback: function (src) {
                        // do some fancy stuff with src here
                        console.log("Webpack context:", this);
                        console.log("Input source:", src);
                        return src;
                    }
                }
            }
        ]
    }
    //...
}
```