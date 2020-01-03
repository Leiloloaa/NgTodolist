import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  public keywords: string;
  public historyList: any[] = [];
  constructor(public storage: StorageService) { }

  ngOnInit() {
    // 生命钩子函数 当渲染页面时 率先调用 先判断 localStorage 里面是否有数据
    var searchlist = this.storage.get('historyList');
    if(searchlist){
      this.historyList = searchlist
    }
  }

  doSearch() {
    if (!this.keywords) {
      return true
    }
    if (this.historyList.indexOf(this.keywords) == -1) {
      // 不存在 添加进去
      this.historyList.push(this.keywords);

      // 添加到 storage 里面去 
      this.storage.set('historyList', this.historyList);
    }
    this.keywords = '';
  }

  doRemove(key) {
    // console.log(key);
    this.historyList.splice(key, 1);
    this.storage.set('historyList', this.historyList);
  }
}
