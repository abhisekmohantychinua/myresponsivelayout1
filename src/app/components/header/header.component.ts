import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input({ required: true }) deviceXs?: boolean;
  @Output() show: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.show.emit();
  }
}
