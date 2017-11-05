// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IMatcher } from "../../framework/api/IMatcher";

import { getQualifiedClassName } from "../../framework/impl/getQualifiedClassName";

import { instanceOfType } from "./instanceOfType";
import { ITypeFilter } from "./ITypeFilter";

/**
 * @private
 */
export class TypeFilter implements ITypeFilter {
    /*============================================================================*/
    /* Public Properties                                                          */
    /*============================================================================*/

    protected _allOfTypes: Function[];

    /**
     * @inheritDoc
     */
    public get allOfTypes(): Function[] {
        return this._allOfTypes;
    }

    protected _anyOfTypes: Function[];

    /**
     * @inheritDoc
     */
    public get anyOfTypes(): Function[] {
        return this._anyOfTypes;
    }

    protected _noneOfTypes: Function[];

    /**
     * @inheritDoc
     */
    public get noneOfTypes(): Function[] {
        return this._noneOfTypes;
    }

    protected _descriptor: string;

    /**
     * @inheritDoc
     */
    public get descriptor(): string {
        return (this._descriptor = this._descriptor || this.createDescriptor());
    }

    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/

    /**
     * @private
     */
    constructor(allOf: Function[], anyOf: Function[], noneOf: Function[]) {
        if (!allOf || !anyOf || !noneOf) {
            throw Error("TypeFilter parameters can not be null");
        }
        this._allOfTypes = allOf;
        this._anyOfTypes = anyOf;
        this._noneOfTypes = noneOf;
    }

    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/

    /**
     * @inheritDoc
     */
    public matches(item: any): boolean {
        let i: number = this._allOfTypes.length;
        let matcher: IMatcher;

        while (i--) {
            matcher = instanceOfType(this._allOfTypes[i]);

            if (!matcher.matches(item)) {
                return false;
            }
        }

        i = this._noneOfTypes.length;
        while (i--) {
            matcher = instanceOfType(this._noneOfTypes[i]);

            if (matcher.matches(item)) {
                return false;
            }
        }

        if (
            this._anyOfTypes.length === 0 &&
            (this._allOfTypes.length > 0 || this._noneOfTypes.length > 0)
        ) {
            return true;
        }

        i = this._anyOfTypes.length;
        while (i--) {
            matcher = instanceOfType(this._anyOfTypes[i]);

            if (matcher.matches(item)) {
                return true;
            }
        }

        return false;
    }

    /*============================================================================*/
    /* Protected Functions                                                        */
    /*============================================================================*/

    protected alphabetiseCaseInsensitiveFCQNs(classes: Function[]): string[] {
        let fqcn: string;
        let allFCQNs: string[] = [];
        let iLength: number = classes.length;

        for (let i: number = 0; i < iLength; i++) {
            fqcn = getQualifiedClassName(classes[i]);
            allFCQNs[allFCQNs.length] = fqcn;
        }

        return allFCQNs.sort(this.stringSort);
    }

    protected createDescriptor(): string {
        let allOf_FCQNs: string[] = this.alphabetiseCaseInsensitiveFCQNs(
            this.allOfTypes
        );
        let anyOf_FCQNs: string[] = this.alphabetiseCaseInsensitiveFCQNs(
            this.anyOfTypes
        );
        let noneOf_FQCNs: string[] = this.alphabetiseCaseInsensitiveFCQNs(
            this.noneOfTypes
        );

        let description: string[] = [];

        if (allOf_FCQNs.length) {
            description.push("all of: " + allOf_FCQNs.toString());
        }

        if (anyOf_FCQNs.length) {
            description.push("any of: " + anyOf_FCQNs.toString());
        }

        if (noneOf_FQCNs.length) {
            description.push("none of: " + noneOf_FQCNs.toString());
        }

        return description.join("; ");
    }

    protected stringSort(item1: string, item2: string): number {
        let result: number = 0;

        // ignore upper and lowercase
        item1 = item1.toUpperCase();
        item2 = item2.toUpperCase();

        if (item1 < item2) {
            result = -1;
        } else if (item1 > item2) {
            result = 1;
        }

        return result;
    }
}
