import { GameObject } from '../game-objects';
import { Collection } from '../utils';

export default class Scene {
  private _gameObjects: Collection<GameObject>;
  private _updates: Function[];

  constructor() {
    this._gameObjects = {};
    this._updates = [];
  }
  
  public get updates(): Function[] {
    return [...this._updates];
  }

  public add(gameObject: GameObject): boolean {
    if (this.contains(gameObject.name)) return false;

    this._gameObjects[gameObject.name] = gameObject;

    return true;
  }

  public remove(gameObjectName: string): boolean {
    if (!this.contains(gameObjectName)) return false;

    delete this._gameObjects[gameObjectName];

    return true;
  }
  
  public get(gameObjectName: string): GameObject|null {
    if (!this.contains(gameObjectName)) return null;

    return this._gameObjects[gameObjectName];
  }

  public getAll(): Collection<GameObject> {
    return this._gameObjects;
  }

  public contains(gameObjectName: string): boolean {
    return this._gameObjects.hasOwnProperty(gameObjectName);
  }

  public clear(): void {
    this._gameObjects = {};
  }


  public attachUpdate(update: Function): void {
    this._updates.push(update);
  }
}
