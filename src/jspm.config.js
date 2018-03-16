SystemJS.config({
  nodeConfig: {
    "paths": {
      "main/": "src/"
    }
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.5"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@4.0.5": {
        "map": {
          "typescript": "npm:typescript@1.8.9"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  packages: {
    "main": {
      "format": "esm",
      "main": "app/main.ts",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    },
    "./main": {
      "format": "esm",
      "main": "../app/main.ts",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  },
  typescriptOptions: {
    "target": "es5",
    "module": "system",
    "noImplicitAny": true
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "css": "github:systemjs/plugin-css@0.1.20",
    "d3": "npm:d3@3.5.16",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.0",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.0",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "rxjs": "npm:rxjs@5.0.0-beta.4",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.0"
  },
  packages: {
    "npm:buffer@4.5.1": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:stream-http@2.2.1": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.0": {
      "map": {
        "buffer-browserify": "npm:buffer@4.5.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.2.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    }
  }
});
