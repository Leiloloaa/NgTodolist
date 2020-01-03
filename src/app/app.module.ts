import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 引入了这个模块 才能进行数据的双向绑定
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

// 1. 引入服务
import { StorageService } from './services/storage.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodolistComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // 2. 配置服务
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
