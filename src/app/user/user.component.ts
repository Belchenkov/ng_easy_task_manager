import { Component, signal, computed } from '@angular/core';

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
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath= computed((): string => `assets/users/${this.selectedUser().avatar}`);

  onSelectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
