import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Images {

  constructor() { }
  getAll():String[]{
    return[
      "lightening_background.png",
      "houses_back.png",
      "houses_front.png",
      "bridge-fore.png",
      "rain_foreground.png"
    ]
  }
}
