import GameObject from './GameObject';
import { Collection } from '../utils';

export default class Group {
  public readonly name: string;
  public visible: boolean;
  protected _gameObjects: Collection<GameObject>;

  constructor(name: string) {
    this.name = name;
    this.visible = false;
    this._gameObjects = {};
  }

  public add(gameObject: GameObject): boolean {
    if (this._gameObjects[gameObject.name] !== undefined) return false;
    
    this._gameObjects[gameObject.name] = gameObject;
    
    return true;
  }

  public get(gameObjectName: string): GameObject|null {
    if (this._gameObjects[gameObjectName] === undefined) return null;

    return this._gameObjects[gameObjectName];
  }

  public getAll(): Collection<GameObject> {
    return {...this._gameObjects};
  }

  public remove(gameObjectName: string): boolean {
    if (this._gameObjects[gameObjectName] === undefined) return false;

    delete this._gameObjects[gameObjectName];

    return true;
  }
}
