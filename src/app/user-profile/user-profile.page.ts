import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataServiceService } from "../data-service.service";
@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.page.html",
  styleUrls: ["./user-profile.page.scss"],
})
export class UserProfilePage implements OnInit {
  constructor(
    private router: Router,
    private dataService: DataServiceService
  ) {}
  goToEdit(mode) {
    this.dataService.setMode(42, mode);
    this.router.navigateByUrl("/edit/42");
  }
  goToEdit2() {
    this.router.navigate(["/edit"]);
  }
  logout() {}
  ngOnInit() {}
}
