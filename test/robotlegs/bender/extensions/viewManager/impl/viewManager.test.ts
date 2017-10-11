// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import "../../../../../entry";

import { assert } from "chai";

import { Sprite } from "pixi.js";

import { ContainerRegistry } from "../../../../../../src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistry";
import { ViewManager } from "../../../../../../src/robotlegs/bender/extensions/viewManager/impl/ViewManager";

import { CallbackViewHandler } from "../support/CallbackViewHandler";

describe("ViewManager", () => {
    let container: Sprite = null;
    let registry: ContainerRegistry = null;
    let viewManager: ViewManager = null;

    beforeEach(() => {
        container = new Sprite();
        registry = new ContainerRegistry();
        viewManager = new ViewManager(registry);
    });

    afterEach(() => {
        container = null;
        registry = null;
        viewManager = null;
    });

    it("container_is_added", () => {
        viewManager.addContainer(container);
    });

    it("container_is_stored", () => {
        let expectedContainers: any[] = [container];
        viewManager.addContainer(container);
        assert.deepEqual(viewManager.containers, expectedContainers);
    });

    it("addContainer_throws_if_containers_are_nested_case1", () => {
        function addNestedContainers(): void {
            const container1: Sprite = new Sprite();
            const container2: Sprite = new Sprite();
            container1.addChild(container2);
            viewManager.addContainer(container1);
            viewManager.addContainer(container2);
        }
        assert.throws(addNestedContainers, Error);
    });

    it("addContainer_throws_if_containers_are_nested_case2", () => {
        function addNestedContainers(): void {
            const container1: Sprite = new Sprite();
            const container2: Sprite = new Sprite();
            container2.addChild(container1);
            viewManager.addContainer(container1);
            viewManager.addContainer(container2);
        }
        assert.throws(addNestedContainers, Error);
    });
});
