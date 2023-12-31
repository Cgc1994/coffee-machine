import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { DatePipe } from './pipes/date.pipe';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MultiDropdownComponent } from './components/multi-dropdown/multi-dropdown.component';
import { ArrowComponent } from './components/dropdown/components/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    DatePipe,
    TodoFormComponent,
    DropdownComponent,
    MultiDropdownComponent,
    ArrowComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
