import { Input, Component, OnInit } from '@angular/core';

declare var Syspower: any;
declare var jquery: any;      // 這邊用 var
declare let $: any;           // 當然 let 也可以
@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html'
})

export class GaugeComponent implements OnInit {
  @Input() xName: string | undefined;
  constructor() { }
  aNumberChart: any;
  digits = 6;

  ngOnInit(): void {
    this.createVerifyNumber();
    console.log('xName=' + this.xName);
  }

  createVerifyNumber(): void {
    // 網頁載入完畢
    document.addEventListener('DOMContentLoaded', (event) => {
      const aMax = Math.pow(10, this.digits - 1);
      const initObj = {
        ComponentId: this.xName, FontType: 'Arial, sans-serif', FontSize: 16,
        NumberColor: '#008800', BgColor: '#FFFFFF', MaxNumber: aMax
      };
      // 驗證碼元件初始化
      this.aNumberChart = new Syspower.VerifyNumber(initObj);

    });
  }

  onClickBtn(): void {
    // 更換數字
    if (this.aNumberChart) {
      // 取一個亂數
      const aMax = Math.pow(10, this.digits) - 1;
      let aNumber = this.getRandom(aMax).toString();
      console.log('aNumber=' + aNumber);
      // 前面補0
      while (aNumber.length < this.digits) {
        aNumber = '0' + aNumber;
      }
      this.aNumberChart.resetNumber(aNumber);
    }
  }

  getRandom(x: number | string): number {
    return Math.floor(Math.random() * Number(x)) + 1;
  }
}
