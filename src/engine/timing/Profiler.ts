import now from './now';

export default class Profiler {
  public startTime: number;
  public endTime: number;
  private _steps: number[];

  constructor() {
    this.startTime = 0;
    this.endTime = 0;
    this._steps = [];
  }

  public get steps(): number[] {
    return [...this._steps];
  }

  public start(): void {
    this.startTime = now();
  }

  public step(): void {
    if (this.startTime) {
      this._steps.push(now());
    }
  }

  public stop(): void {
    this.endTime = now();
  }

  public getStep(index: number): number|null {
    if (index < this._steps.length) {
      return this._steps[index];
    }

    return null;
  }
}
