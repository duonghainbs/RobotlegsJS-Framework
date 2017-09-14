// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { injectable, inject, named } from "inversify";

@injectable()
export class ClassReportingCallbackHook {
    protected _reportingFunction: Function;

    constructor(
        @inject("Function")
        @named("reportingFunction")
        reportingFunction: Function
    ) {
        this._reportingFunction = reportingFunction;
    }

    public hook(): void {
        if (this._reportingFunction) {
            this._reportingFunction(ClassReportingCallbackHook);
        }
    }
}
