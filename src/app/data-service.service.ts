import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  private mode = [];
  constructor() {}
  setMode(id, mode) {
    this.mode[id] = mode;
  }
  getMode(id) {
    return this.mode[id];
  }
}
