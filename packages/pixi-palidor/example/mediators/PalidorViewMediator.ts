// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { Event, injectable } from "@robotlegsjs/core";
import { Mediator } from "@robotlegsjs/pixi";
import { PalidorView } from "../views/PalidorView";

@injectable()
export class PalidorViewMediator extends Mediator<PalidorView> {
    public initialize(): void {
        this.eventMap.mapListener(this.view.setViewButton, "click", this._onSetView, this);
        this.eventMap.mapListener(this.view.addViewButton, "click", this._onAddView, this);
    }

    public destroy(): void {
        this.eventMap.unmapListeners();
    }

    private _onSetView(e: any): void {
        this.eventDispatcher.dispatchEvent(new Event("robotlegsjsView"));
    }

    private _onAddView(e: any): void {
        this.eventDispatcher.dispatchEvent(new Event("floatingView"));
    }
}
