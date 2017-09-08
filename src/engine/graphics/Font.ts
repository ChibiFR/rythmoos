export default class Font {
  public readonly fontName: string;
  public fontSize: number;
  public color: string;

  constructor(fontName: string, fontSize: number = 12, color: string = '#000000') {
    this.fontName = fontName;
    this.fontSize = fontSize;
    this.color = color;
  }
}
