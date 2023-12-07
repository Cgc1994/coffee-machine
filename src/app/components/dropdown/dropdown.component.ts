import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() placeholder?: string;
  @Input() options: any[] = [];
  @Input() optionSelected?: any;
  @Input() disabled: boolean = false;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  public open: boolean = false;

  public toggleDropdown() {
    if (!this.disabled) {
      this.open = !this.open;
    }
  }

  public selectOption(option: any) {
    if (!this.disabled) {
      this.onSelect.emit(option);
      this.optionSelected = option;
      this.open = false;
    }
  }
}
