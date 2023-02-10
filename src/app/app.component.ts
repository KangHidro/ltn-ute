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
        this.svInfo = sv;
      }
    } else {
      // Nguyễn văn An;Công nghệ thông tin
      const tmp = this.mssv.split(';');
      this.mssv = '';
      this.svInfo = {
        mssv: 'ko', hoTen: tmp[0]?.trim(), nganh: tmp[1]?.trim()
      };
    }
  }
}

class SinhVienInfo {
  mssv: string = '';
  hoTen: string = '';
  nganh: string = '';
}
