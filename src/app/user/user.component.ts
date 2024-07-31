import { Component, computed, input } from "@angular/core";

import { DUMMY_USERS } from "../dummy-users";
import { NgOptimizedImage } from "@angular/common";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: "app-user",
  standalone: true,
  templateUrl: "./user.component.html",
  imports: [
    NgOptimizedImage
  ],
  styleUrl: "./user.component.css"
})
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser(): void {

  }
}
