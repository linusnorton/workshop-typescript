
// Enums
enum Rainbow {
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Indigo,
  Violet
}

enum Unicorns {
  PrincessSparkle = 'Princess Sparkle',
  RainbowDash = 'Rainbow Dash',
  PinkiePie = 'Pinkie Pie',
  TwilightSparkle = 'Twilight Sparkle',
}

// Abstract classes
abstract class Planet {

  constructor(
    private readonly name: string,
    protected readonly radius: number
  ) {}

  public abstract getMass(): number;

  public setRadius(radius: number): void {
    this.radius = radius;
  }

}

class GasGiant extends Planet {

  public getMass(): number {
    return 0.1 * this.radius;
  }

}

