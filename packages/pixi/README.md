# RobotlegsJS PixiJS Extension

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/RobotlegsJS/RobotlegsJS-Framework/tree/master/packages/pixi/LICENSE)
[![Gitter chat](https://badges.gitter.im/RobotlegsJS/RobotlegsJS.svg)](https://gitter.im/RobotlegsJS/RobotlegsJS)
[![npm version](https://badge.fury.io/js/%40robotlegsjs%2Fpixi.svg)](https://badge.fury.io/js/%40robotlegsjs%2Fpixi)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Integrate [RobotlegsJS](https://github.com/RobotlegsJS/RobotlegsJS-Framework/tree/master/packages/core)
framework with [PixiJS](https://github.com/pixijs/pixi.js).

## Installation

### Get `@robotlegsjs/pixi`

You can get the latest release and the type definitions using [NPM](https://www.npmjs.com/):

```bash
npm install @robotlegsjs/pixi --save
```

Or using [Yarn](https://yarnpkg.com/en/):

```bash
yarn add @robotlegsjs/pixi
```

From version `0.2.0` of this package, the [PixiJS](https://github.com/pixijs/pixi.js) dependencies were moved to **peerDependencies**,
allowing the final user to choose the desired version of the `pixi.js` library on each project.

#### For `pixi.js` version 5

The `@robotlegsjs/pixi` package version `^2.0.0` is compatible with versions `>=5.0.0 <6` version range of `pixi.js` library.

Since version `5.0.0` of `pixi.js`, the `eventemitter3` library was removed and is not necessary anymore.

You can setup your project for version 5 of `pixi.js` using:

```bash
npm install @robotlegsjs/pixi@^2.0.0 pixi.js@^5.0.0 --save
```

or

```bash
yarn add @robotlegsjs/pixi@^2.0.0 pixi.js@^5.0.0
```

#### For `pixi.js` version 4

For `pixi.js` `>=4.2.1 <5`, please use `@robotlegsjs/pixi` version `^1`.

```bash
npm install @robotlegsjs/pixi@^1.0.1 --save
```

or

```bash
yarn add @robotlegsjs/pixi@^1.0.1
```

Since each version of `pixi.js` v4 library defines which version of `eventemitter3` library is being used, remember to also install the proper version of `eventemitter3` in your project.

As example, when you would like to use the version `4.2.1` of `pixi.js` library, you can run:

```bash
npm install pixi.js@4.2.1 eventemitter3@^2.0.0 reflect-metadata --save
```

or

```bash
yarn add pixi.js@4.2.1 eventemitter3@^2.0.0 reflect-metadata
```

### Setup of your project

Then follow the [installation instructions](https://github.com/RobotlegsJS/RobotlegsJS-Framework/tree/master/packages/core#installation) of **RobotlegsJS** library to complete the setup of your project.

**Dependencies**

+ [RobotlegsJS](https://github.com/RobotlegsJS/RobotlegsJS-Framework/tree/master/packages/core)
+ [tslib](https://github.com/Microsoft/tslib)

**Peer Dependencies**

+ [PixiJS](https://github.com/pixijs/pixi.js)
+ [eventemitter3](https://github.com/primus/eventemitter3)
+ [reflect-metadata](https://github.com/rbuckton/reflect-metadata)

## Usage

```typescript
import "reflect-metadata";

import * as PIXI from 'pixi.js';

import { Context, MVCSBundle } from "@robotlegsjs/core";
import { ContextView, PixiBundle } from "@robotlegsjs/pixi";

import { MyConfig } from "./config/MyConfig";
import { RobotlegsView } from "./view/RobotlegsView";

export class Game {

    private canvas: HTMLCanvasElement;
    private stage: PIXI.Container;
    private renderer: PIXI.Renderer;
    private context: Context;

    constructor () {
        this.canvas = <HTMLCanvasElement>(document.getElementById("canvas"));
        this.renderer = PIXI.autoDetectRenderer({
            width: 960,
            height: 400,
            view: this.canvas,
            backgroundColor: 0xffffff
        });
        this.stage = new PIXI.Container();

        this.context = new Context();
        this.context.install(MVCSBundle, PixiBundle).
            configure(new ContextView(this.stage)).
            configure(MyConfig).
            initialize();

        this.stage.addChild(new RobotlegsView());

        document.body.appendChild(this.renderer.view);

        this.render();
    }

    public render = () => {
        this.renderer.render(this.stage);
        window.requestAnimationFrame(this.render);
    }

}

let game: Game = new Game();

```

[See full example here](example/index.ts)

## Running the example

Run the following commands to run the example:

```bash
npm install
npm start
```

or:

```bash
yarn install
yarn start
```

## RobotlegsJS PixiJS for enterprise

Available as part of the Tidelift Subscription

The maintainers of [@robotlegsjs/pixi](https://github.com/RobotlegsJS/RobotlegsJS-Framework/tree/master/packages/pixi) and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-robotlegsjs-pixi?utm_source=npm-robotlegsjs-pixi&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

## License

[MIT](LICENSE)
