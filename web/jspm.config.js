SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  transpiler: "plugin-babel",
  babelOptions: {
    "plugins": [
      "babel-relay-plugin-loader"
    ]
  },

  map: {
    "babel-relay-plugin": "npm:babel-relay-plugin@0.7.1",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.6"
  },

  packages: {
    "relay-jspm-starter-kit": {
      "format": "esm",
      "main": "main.js"
    },
    "babel-relay-plugin-loader": {
      "main": "babelrelaypluginloader.js"
    },
    "npm:babel-relay-plugin@0.7.1": {
      "map": {
        "graphql": "npm:graphql@0.4.18"
      }
    }
  }
});
