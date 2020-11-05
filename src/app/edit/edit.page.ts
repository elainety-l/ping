import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.page.html",
  styleUrls: ["./edit.page.scss"],
})
export class EditPage implements OnInit {
  mode: any;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    if (this.route.snapshot.data["special"]) {
      this.mode = this.route.snapshot.data["special"];
    }
  }
}
