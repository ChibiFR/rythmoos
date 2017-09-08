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

  public get duration(): number {
    if (this.endTime) {
      return this.endTime - this.startTime;
    } else if (this.startTime) {
      return now() - this.startTime;
    } else {
      return 0;
    }
  }

  public get steps(): number[] {
    return [...this._steps];
  }

  public start(): void {
    this.endTime = 0;
    this._steps = [];
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

  public getStepDuration(index: number): number|null {
    const step: number|null = this.getStep(index);

    if (step !== null) {
      return step - this.startTime;
    }

    return null;
  }

  public getStepDurations(): number[] {
    const steps: number[] = [];

    for (const step of this.steps) {
      steps.push(step - this.startTime);
    }

    return steps;
  }
}
