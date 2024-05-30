import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { ItemComponent } from './item/item.component';
import { bootstrapApplication } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ListTodoComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
