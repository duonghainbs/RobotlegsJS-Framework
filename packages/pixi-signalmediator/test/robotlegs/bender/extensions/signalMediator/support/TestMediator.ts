// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//  Copyright (c) 2016 San Dinh Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { EventDispatcher, EventMap } from "@robotlegsjs/core";
import { ISignal } from "@robotlegsjs/signals";
import { SignalMediator } from "../../../../../../src/robotlegs/bender/extensions/signalMediator/impl/SignalMediator";

export class TestMediator extends SignalMediator<EventDispatcher> {
    public constructor() {
        super();

        this.eventMap = new EventMap();
    }

    public addToSignalRouter(signal: ISignal, handler: Function): void {
        this.addToSignal(signal, handler);
    }

    public addOnceToSignalRouter(signal: ISignal, handler: Function): void {
        this.addOnceToSignal(signal, handler);
    }

    public initialize(): void {}

    public destroy(): void {}
}
