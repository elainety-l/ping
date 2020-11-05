import { DataServiceService } from "./data-service.service";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class DataResolverService {
  constructor(private dataService: DataServiceService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get("id");
    return this.dataService.getMode(id);
  }
}
