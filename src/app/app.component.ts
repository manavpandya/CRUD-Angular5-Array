import { Component , OnInit } from '@angular/core';

export class MyItems {
  Value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Working With Array In Angular 5';

  IsForUpdate: boolean = false;

  myItems: MyItems[] = new Array();
  newItem: any = {};
  updatedItem;

  

  EditItem(i) {
    this.newItem.Value = this.myItems[i].Value;
    this.updatedItem = i;
    this.IsForUpdate = true;
  }

  UpdateItem() {
    let data = this.updatedItem;
    for (let i = 0; i < this.myItems.length; i++) {
      if (i == data) {
        this.myItems[i].Value = this.newItem.Value;
      }
    }
    this.IsForUpdate = false;
    this.newItem = {};
  }

  AddItem() {
    this.myItems.push(
      this.newItem
    );
    this.newItem = {};
  }

  DeleteItem(i) {
    this.myItems.splice(i, 1);
  }

}
