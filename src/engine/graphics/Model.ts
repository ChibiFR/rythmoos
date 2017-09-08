import PathPoint from './PathPoint';
import Path from './Path';

export default class Model {
  private _path: Path;

  constructor(path: Path = []) {
    this._path = path;
  }

  public get path(): Path {
    return [...this._path];
  }

  public set path(path: Path) {
    this._path = [...path];
  }

  public getPoint(index: number): PathPoint|null {
    if (index < this._path.length) {
      return [
        this._path[index][0],
        this._path[index][1]
      ];
    }

    return null;
  }

  public setPoint(index: number, pathPoint: PathPoint): boolean {
    if (index < this._path.length) {
      this._path[index] = [
        pathPoint[0],
        pathPoint[1]
      ];

      return true;
    }

    return false;
  }

  public addPoint(pathPoint: PathPoint) {
    this._path.push(pathPoint);
  }

  public removePoint(index: number): boolean {
    if (index < this._path.length) {
      this._path.slice(index, 1);

      return true;
    }

    return false;
  }
}
