import { injectable } from "@robotlegsjs/core";

@injectable()
export class GameStatus {

    public hasToWait: boolean;
    private _isPaused: boolean;
    private _isGameOver: boolean;

    public start(): void {
        this._isGameOver = false;
    }

    public activeGameOver(): void {
        this._isGameOver = true;
    }

    public pauseGame(): void {
        this._isPaused = true;
    }

    public resumeGame(): void {
        this._isPaused = false;
    }

    public get isPaused(): boolean {
        return this._isPaused;
    }

    public get isGameOver(): boolean {
        return this._isGameOver;
    }
}
