// ------------------------------------------------------------------------------
//  Copyright (c) Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { injectable, inject, named } from "inversify";

import { ICommand } from "@robotlegsjs/core";

@injectable()
export class Report3Command implements ICommand {
    @inject("Function")
    @named("reportingFunction")
    protected _report: Function;

    public execute(): void {
        this._report(3);
    }
}
