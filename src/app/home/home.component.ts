import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

// ตัวแปรหรือ properties
// เป็นแบบ Global
itemCount:number = 4;                    // One Way binding
btnText:string = 'เพิ่มรายการใหม่';     // One Way binding
listText:string = 'รายการเริ่มต้น';         // Two Way binding (Model)
listall = [];                                          // ตัวแปร array

  constructor() { }

  ngOnInit() {
    //นับจำนวนรายการเริ่มต้น
    this.itemCount=this.listall.length;
  }

  addItem()
  {
    // ตรวจค่าว่าง
    if (this.listText.length!=0){
    //alert("OK");
    //รับค่าจาก form และบันทึกลง array listall
    this.listall.push(this.listText);
    //เคลียร์ค่าฟอร์ม
    this.listText='';
    //นับจำนวนล่าสุด
    this.itemCount=this.listall.length;
  }
  }

}
