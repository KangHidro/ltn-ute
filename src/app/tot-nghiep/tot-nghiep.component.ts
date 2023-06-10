import { AfterViewInit, Component } from '@angular/core';
import database from '../../assets/db/db.json';
import { SinhVienInfo } from '../model/info-sv.model';

@Component({
  selector: 'app-tot-nghiep',
  templateUrl: './tot-nghiep.component.html',
  styleUrls: ['./tot-nghiep.component.scss']
})
export class TotNghiepComponent implements AfterViewInit {

  listSv: SinhVienInfo[] = database;
  svInfo = new SinhVienInfo();
  mssv = '';
  isHaveImg = true;

  ngAfterViewInit(): void {
    document.body.classList.remove('bg-kt');
    document.body.classList.add('bg-tn');
  }

  lookup() {
    if (this.mssv.length === 8) {
      const sv = this.listSv.find(x => x.mssv === this.mssv);
      if (sv?.hoTen) {
        this.mssv = '';
        this.isHaveImg = true;
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
