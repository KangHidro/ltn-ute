import { Component, OnInit } from '@angular/core';
import database from '../assets/db/db.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  listSv: SinhVienInfo[] = database;
  svInfo = new SinhVienInfo();
  mssv = '';

  ngOnInit(): void {
  }

  lookup() {
    if (this.mssv.length === 8) {
      const sv = this.listSv.find(x => x.mssv === this.mssv);
      if (sv?.hoTen) {
        this.mssv = '';
        this.svInfo = Object.assign({}, sv);
      }
    } else if (this.mssv.includes(';')) {
      // ks; Nguyễn văn An; Công nghệ thông tin
      // cn; Nguyễn văn An; Kinh tế
      const tmp = this.mssv.split(';');
      this.mssv = '';
      this.svInfo = {
        mssv: 'ko',
        danhHieu: tmp[0]?.trim().toLowerCase() === 'ks' ? 'Kỹ sư' : 'Cử nhân',
        hoTen: tmp[1]?.trim(), nganh: tmp[2]?.trim()
      };
    } else {
      this.svInfo.mssv = '';
    }
  }
}

class SinhVienInfo {
  mssv: string = '';
  hoTen: string = '';
  nganh: string = '';
  danhHieu: string = '';
}
