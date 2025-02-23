import { Component, EventEmitter, Input, Output } from "@angular/core";

import { type IUser } from "./user.model";

@Component({
  selector: "app-user",
  standalone: true,
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css"
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Output() select = new EventEmitter<string>();

  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
