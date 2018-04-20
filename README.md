# Angular CLI test repo

Repository for testing Angular CLI builds with a medium-large project.

A webpack only version of this codebase can be found at https://github.com/filipesilva/webpack-module-concatenation-memory.

## Angular CLI 6.0.0-rc.5

15 minutes, around 5gb peak memory usage for the main process, plus 7*600MB for parallel uglify.

```
$ npm run prod && npm run version

> angular-cli-test-repo@0.0.0 prod D:\sandbox\angular-cli-test-repo
> npm run ng-high-memory -- build --prod


> angular-cli-test-repo@0.0.0 ng-high-memory D:\sandbox\angular-cli-test-repo
> node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng "build" "--prod"


Date: 2018-04-20T20:59:37.525Z
Hash: 5986849a789431615149
Time: 2705037ms
chunk {9} 9.919fb6ba46f4543e4af2.js () 1.86 MB  [rendered]
chunk {scripts} scripts.bbb6fd2cbe13341fd8c8.js (scripts) 6.22 kB  [rendered]
chunk {0} 0.e03466240eb80bf64621.js () 45.5 kB  [rendered]
chunk {1} 1.b7421322e761494eebcf.js () 3.03 kB  [rendered]
chunk {2} 2.068ed6e7a94ba8534422.js () 1.86 MB  [rendered]
chunk {3} 3.535cdc837b84fe47a758.js () 1.86 MB  [rendered]
chunk {4} 4.da4a06286d0eec15064e.js () 1.86 MB  [rendered]
chunk {5} 5.e9e1bf0576495a1277df.js () 1.86 MB  [rendered]
chunk {6} 6.292a1d8ac84446cdc490.js () 1.86 MB  [rendered]
chunk {7} 7.8db0283d4244a626a819.js () 1.86 MB  [rendered]
chunk {8} 8.0f27f94cb14e92a9e217.js () 1.86 MB  [rendered]
chunk {10} 10.5a3b5835dac5f8230df3.js () 1.87 MB  [rendered]
chunk {11} 11.4243a5884c6effbe5ab0.js () 1.86 MB  [rendered]
chunk {12} 12.fdf08885e9abaa806c92.js () 355 kB  [rendered]
chunk {13} 13.b528153f2f654c34cb95.js () 66.7 kB  [rendered]
chunk {14} runtime.6347fe64716c601fea43.js (runtime) 2.14 kB [entry] [rendered]
chunk {15} styles.19aba7f537206a829d39.css (styles) 200 kB [initial] [rendered]
chunk {16} polyfills.8ffe695a83b135dbeb50.js (polyfills) 59.4 kB [initial] [rendered]
chunk {17} main.dc3abdf4879d2567f0d2.js (main) 1.55 MB [initial] [rendered]

> angular-cli-test-repo@0.0.0 version D:\sandbox\angular-cli-test-repo
> ng --version


     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 6.0.0-rc.5
Node: 8.11.0
OS: win32 x64
Angular: 5.2.10
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.5.7
@angular-devkit/build-angular     0.5.7
@angular-devkit/build-optimizer   0.5.7
@angular-devkit/core              0.5.7
@angular-devkit/schematics        0.5.7
@angular/cli                      6.0.0-rc.5
@ngtools/json-schema              1.1.0
@ngtools/webpack                  6.0.0-rc.5
@schematics/angular               0.5.7
@schematics/update                0.5.7
rxjs                              5.5.10
typescript                        2.6.2
webpack                           4.5.0
```
## Angular CLI 1.7.4

15 minutes, around 5gb peak memory usage for the main process, plus 7*600MB for parallel uglify.

```
$ npm run prod && npm run version

> angular-cli-test-repo@0.0.0 prod D:\sandbox\angular-cli-test-repo
> npm run ng-high-memory -- build --prod


> angular-cli-test-repo@0.0.0 ng-high-memory D:\sandbox\angular-cli-test-repo
> node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng "build" "--prod"

Date: 2018-04-19T20:27:10.307Z
Hash: 82bbb90e94e89fb3c337
Time: 887953ms
chunk {9} 9.3be46ae244f06ee9000e.chunk.js () 1.86 MB  [rendered]
chunk {scripts} scripts.bbb6fd2cbe13341fd8c8.bundle.js (scripts) 6.22 kB [initial] [rendered]
chunk {0} 0.2ef9a9952802d209dacc.chunk.js (common) 49 kB  [rendered]
chunk {1} 1.39342b127ed12f945142.chunk.js () 3.03 kB  [rendered]
chunk {2} 2.390323424ea8e50f16dd.chunk.js () 1.86 MB  [rendered]
chunk {3} 3.369d48a629262cc440a6.chunk.js () 1.86 MB  [rendered]
chunk {4} 4.65c56c84c13d805d3c91.chunk.js () 1.86 MB  [rendered]
chunk {5} 5.862a0a63b92647a5333f.chunk.js () 1.86 MB  [rendered]
chunk {6} 6.f8c9ead5785a7c495314.chunk.js () 1.86 MB  [rendered]
chunk {7} 7.072c81c8c4b05ddb5a36.chunk.js () 1.86 MB  [rendered]
chunk {8} 8.2734e5fcd23351959662.chunk.js () 1.86 MB  [rendered]
chunk {10} 10.7ed2c03b018f394f07b7.chunk.js () 1.86 MB  [rendered]
chunk {11} 11.e13e816af08864901497.chunk.js () 1.86 MB  [rendered]
chunk {12} 12.9b56b47cde929524bdd3.chunk.js () 355 kB  [rendered]
chunk {13} 13.727164d0175fcd8c9089.chunk.js () 65.7 kB  [rendered]
chunk {14} main.3a50f2677caed8d868de.bundle.js (main) 1.55 MB [initial] [rendered]
chunk {15} polyfills.c9619c56f2df1d8a4dab.bundle.js (polyfills) 59.7 kB [initial] [rendered]
chunk {16} styles.7d0103b045fb29934ebb.bundle.css (styles) 225 kB [initial] [rendered]
chunk {17} inline.51e230eb73071f6b3ff0.bundle.js (inline) 1.73 kB [entry] [rendered]

> angular-cli-test-repo@0.0.0 version D:\sandbox\angular-cli-test-repo
> ng --version


    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/

Angular CLI: 1.7.4
Node: 8.11.0
OS: win32 x64
Angular: 5.2.10
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

@angular/cli: 1.7.4
@angular-devkit/build-optimizer: 0.3.2
@angular-devkit/core: 0.3.2
@angular-devkit/schematics: 0.3.2
@ngtools/json-schema: 1.2.0
@ngtools/webpack: 1.10.2
@schematics/angular: 0.3.2
@schematics/package-update: 0.3.2
typescript: 2.6.2
webpack: 3.11.0
```
## Angular CLI 1.7.0-beta.1

10 minutes, around 5gb peak memory usage.

```
$ npm run prod && npm run version

> angular-cli-test-repo@0.0.0 prod D:\sandbox\angular-cli-test-repo
> npm run ng-high-memory -- build --prod


> angular-cli-test-repo@0.0.0 ng-high-memory D:\sandbox\angular-cli-test-repo
> node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng "build" "--prod"

Date: 2018-01-19T13:30:52.414Z
Hash: 2cf55e0a0a4ed0e659d9
Time: 627961ms
chunk {9} 9.3abe417571331ea0fdbb.chunk.js () 1.86 MB  [rendered]
chunk {scripts} scripts.bbb6fd2cbe13341fd8c8.bundle.js (scripts) 6.22 kB [initial] [rendered]
chunk {0} 0.8059009d31f0f0fb88a2.chunk.js (common) 49.3 kB  [rendered]
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
chunk {12} 12.888b487046063b1f0a6e.chunk.js () 355 kB  [rendered]
chunk {13} 13.f55e0105b19beeafbf06.chunk.js () 65.7 kB  [rendered]
chunk {14} main.6bf3d417172958c89815.bundle.js (main) 1.54 MB [initial] [rendered]
chunk {15} polyfills.d4a5d8964ccdeda93f7b.bundle.js (polyfills) 61.2 kB [initial] [rendered]
chunk {16} styles.5b6fda381b36657ec86b.bundle.css (styles) 225 kB [initial] [rendered]
chunk {17} inline.b88c4e3332b92452be06.bundle.js (inline) 1.8 kB [entry] [rendered]

> angular-cli-test-repo@0.0.0 version D:\sandbox\angular-cli-test-repo
> ng --version


    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/

Angular CLI: 1.7.0-beta.1
Node: 8.9.1
OS: win32 x64
Angular: 5.2.1
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

@angular/cli: 1.7.0-beta.1
@angular-devkit/build-optimizer: 0.0.41
@angular-devkit/core: 0.0.28
@angular-devkit/schematics: 0.0.51
@ngtools/json-schema: 1.1.0
@ngtools/webpack: 1.10.0-beta.1
@schematics/angular: 0.1.16
typescript: 2.6.2
webpack: 3.10.0
```

## Angular CLI 1.6.5

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
