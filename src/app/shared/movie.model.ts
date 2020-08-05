export class Movie {
  constructor(
    public id?: number,
    public title?: string,
    public obs?: string,
    public rating?: number,
    public toWatchNext?: boolean
  ) {}


  public static fromJson(jsonData: any): Movie{
    return Object.assign(new Movie(), jsonData);
  }

  public toggleMovieWatchNext() {
    this.toWatchNext = !this.toWatchNext;
  }

}