import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.less']
})
export class TodolistComponent implements OnInit {

  public keywords: string;
  public todolist: any[] = [];
  constructor(public storage: StorageService) {

  }

  ngOnInit() {
    var searchlist = this.storage.get('todolist');
    if (searchlist) {
      this.todolist = searchlist;
    }
  }

  doAdd(e) {
    // 如果为空 不添加
    if (!this.keywords) {
      return true
    }
    if (e.keyCode == 13) {
      if (!this.selectTodo(this.todolist, this.keywords)) {
        this.todolist.push({
          title: this.keywords,
          status: false
        });
      }
      this.keywords = ''
      this.storage.set('todolist', this.todolist);
    }
  }

  doDel(key) {
    this.todolist.splice(key, 1);
    this.storage.set('todolist', this.todolist);
  }
  // 判断输入的是否存在 存在返回true forEach 是一个异步的方法 可能会出错 最好还是用for循环
  selectTodo(todolist: any, keywords: any) {
    for (let i = 0; i < todolist.length; i++) {
      if (this.todolist[i].title == this.keywords) {
        return true
      }
    }
    return false
  }

  changeStatus() {
    this.storage.set('todolist', this.todolist);
  }
}
