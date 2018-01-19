# Angular CLI test repo

Repository for testing Angular CLI builds with a medium-large project.


## Angular CLI: 1.6.5

21 minutes, around 5gb peak memory usage.

```
$ npm run prod && npm run version

> code-generator@0.0.0 prod D:\sandbox\angular-cli-test-repo
> npm run ng-high-memory -- build --prod


> code-generator@0.0.0 ng-high-memory D:\sandbox\angular-cli-test-repo
> node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng "build" "--prod"

 69% building modules 4368/4369 modules 1 active ...ar-cli-test-repo\src\scss\styles.scssNode#moveTo was dDate: 2018-01-19T13:01:08.463ZHash: a07f4e9cd9c46b9f5243
Time: 1236579ms
chunk {9} 9.3abe417571331ea0fdbb.chunk.js () 1.86 MB  [rendered]
chunk {scripts} scripts.bbb6fd2cbe13341fd8c8.bundle.js (scripts) 6.22 kB [initial] [rendered]
chunk {0} 0.f986017c3911499d19e9.chunk.js (common) 49.1 kB  [rendered]
chunk {1} 1.d75827c3abd4fbe53fe1.chunk.js () 3.03 kB  [rendered]
chunk {2} 2.620f8d8d5bc60d64c837.chunk.js () 1.86 MB  [rendered]
chunk {3} 3.bd74f90943194f83757b.chunk.js () 1.86 MB  [rendered]
chunk {4} 4.ee5d7c7d984847fe63cc.chunk.js () 1.86 MB  [rendered]
chunk {5} 5.6bab8a8a68df548785ea.chunk.js () 1.86 MB  [rendered]
chunk {6} 6.174b09380d487fb7796d.chunk.js () 1.86 MB  [rendered]
chunk {7} 7.9c562019d740c6e370bc.chunk.js () 1.86 MB  [rendered]
chunk {8} 8.1e230c195c6aeb6e962e.chunk.js () 1.86 MB  [rendered]
chunk {10} 10.d2376cbd529d363d8975.chunk.js () 1.86 MB  [rendered]
chunk {11} 11.c6d46c75cba8f38ff162.chunk.js () 1.86 MB  [rendered]
chunk {12} 12.60e14321ddd5cba4cb12.chunk.js () 355 kB  [rendered]
chunk {13} 13.f55e0105b19beeafbf06.chunk.js () 65.7 kB  [rendered]
chunk {14} main.6bf3d417172958c89815.bundle.js (main) 1.54 MB [initial] [rendered]
chunk {15} polyfills.d4a5d8964ccdeda93f7b.bundle.js (polyfills) 61.2 kB [initial] [rendered]
chunk {16} styles.ea50a4116bb1b9d1d0a5.bundle.css (styles) 231 kB [initial] [rendered]
chunk {17} inline.98887c2dcff24e36bb85.bundle.js (inline) 1.8 kB [entry] [rendered]

> code-generator@0.0.0 version D:\sandbox\angular-cli-test-repo
> ng --version


    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/

Angular CLI: 1.6.5
Node: 8.9.1
OS: win32 x64
Angular: 5.2.1
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

@angular/cli: 1.6.5
@angular-devkit/build-optimizer: 0.0.41
@angular-devkit/core: 0.0.28
@angular-devkit/schematics: 0.0.51
@ngtools/json-schema: 1.1.0
@ngtools/webpack: 1.9.5
@schematics/angular: 0.1.16
typescript: 2.6.2
webpack: 3.10.0
```
