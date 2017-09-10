import Font from './Font';

export default abstract class TextMeasure {
  private static context: CanvasRenderingContext2D;

  public static _init(): void {
    this.context = <CanvasRenderingContext2D>document.createElement('canvas').getContext('2d');
  }

  public static measureText(text: string, font: Font): number {
    this.context.font = `${font.fontSize}px ${font.fontName}`;
    
    return this.context.measureText(text).width;
  }
}
