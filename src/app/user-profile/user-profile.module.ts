import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { Component } from "@angular/core";
import { UserProfilePageRoutingModule } from "./user-profile-routing.module";
import { Router } from "@angular/router";
import { EditPage } from "../edit/edit.page";
import { UserProfilePage } from "./user-profile.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule,
  ],
  declarations: [UserProfilePage],
})
export class UserProfilePageModule {}
