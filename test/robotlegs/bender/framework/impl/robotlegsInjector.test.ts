// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { assert } from "chai";

import { RobotlegsInjector } from "../../../../../src/robotlegs/bender/framework/impl/RobotlegsInjector";

describe("RobotlegsInjector", () => {

    let parentInjector: RobotlegsInjector;
    let childInjector: RobotlegsInjector;

    beforeEach(() => {
        parentInjector = new RobotlegsInjector();
    });

    afterEach(() => {
        parentInjector = null;
        childInjector = null;
    });

    it("parent get set", () => {
        childInjector = new RobotlegsInjector();
        childInjector.parent = parentInjector;
        assert.equal(parentInjector, (<any>childInjector)._parentKernel);
    });

    it("createChild remembers parent", () => {
        childInjector = <RobotlegsInjector>parentInjector.createChild();
        assert.equal(parentInjector, (<any>childInjector)._parentKernel);
    });
});
