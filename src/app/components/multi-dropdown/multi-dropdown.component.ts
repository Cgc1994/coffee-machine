import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectedOption } from 'src/app/interfaces/todos.interfaces';

@Component({
  selector: 'app-multi-dropdown',
  templateUrl: './multi-dropdown.component.html',
  styleUrls: ['./multi-dropdown.component.scss'],
})
export class MultiDropdownComponent {
  @Input() placeholder?: string;
  @Input() options: any[] = [];
  @Input() selectedOptions: SelectedOption[] = [];
  @Output() onSelect: EventEmitter<any[]> = new EventEmitter<any[]>();

  public open: boolean = false;

  public toggleDropdown() {
    this.open = !this.open;
  }

  public toggleOption(option: any) {
    const index = this.selectedOptions.indexOf(option);
    if (index === -1) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions.splice(index, 1);
    }
    this.onSelect.emit(this.selectedOptions);
  }

  public getSelectedOptionsText(): string {
    return this.selectedOptions.map(option => option).join(', ');
  }

  public increaseQuantity(selectedOption: SelectedOption) {
    selectedOption.quantity++;
    this.onSelect.emit(this.selectedOptions);
  }
  
  public decreaseQuantity(selectedOption: SelectedOption) {
    if (selectedOption.quantity > 0) {
      selectedOption.quantity--;
      this.onSelect.emit(this.selectedOptions);
    }
  }
  
}
