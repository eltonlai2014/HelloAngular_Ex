import { Input, Component, OnInit, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
//declare let L: any; // 當然 let 也可以
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @Input() MapId: string | undefined;
  map: any;
  constructor() {}

  ngOnInit(): void {
    this.initMap2();
    console.log('MapId=' + this.MapId);
  }

  initMap2(): void {
    // 網頁載入完畢
    document.addEventListener('DOMContentLoaded', (event) => {
      console.log('MapId=' + this.MapId);
      let mapType =
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWx0b24tbGFpMjAyMSIsImEiOiJja291MTFpNGEwZWphMnpycmtmMTRhNXVyIn0._0llMSyKbgFp_ddfd1fmaQ';

      //mapType = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      //var mymap = L.map("mapid").setView([22.992, 120.239], 18); // 動態設定

      let mymap = L.map(this.MapId + '', {
        center: [22.992, 120.239], // 中心點座標，[經度, 緯度]，[lat, lng ]
        zoom: 14, // 0 - 18，數字越小地圖範圍越大
        zoomControl: false, // 是否秀出 - + 按鈕
        attributionControl: true, // 是否秀出「leaflet」的貢獻標記
      });
      this.map = mymap;
      // 地圖類型參數
      L.tileLayer(mapType, {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mymap);

      let posList = [
        { lat: 22.992, lng: 120.239 },
        { lat: 22.993, lng: 120.239 },
        { lat: 22.994, lng: 120.239 },
        { lat: 22.995, lng: 120.239 },
        { lat: 22.992, lng: 120.3 },
      ];

      let marker = L.marker([22.992, 120.239])
        .addTo(mymap)
        .bindPopup('<b>Hello world!</b><br />I am a popup.')
        .openPopup();

      for (let i = 0; i < posList.length; i++) {
        let aPos = posList[i];
        L.marker([aPos.lat, aPos.lng]).addTo(mymap);
        //L.circle([aPos.lat, aPos.lng], 500, circleOption).addTo(mymap)
      }

      let circleOption = {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
      };

      L.circle([22.992, 120.239], 500, circleOption)
        .addTo(mymap)
        .bindPopup('I am a circle.');

      L.polygon([
        [22.992, 120.23],
        [22.999, 120.235],
        [23, 120.23],
      ])
        .addTo(mymap)
        .bindPopup('I am a polygon.');

      const popup = L.popup();

      // 點擊地圖事件
      function onMapClick(e: any) {
        let lat = e.latlng.lat; // 緯度
        let lng = e.latlng.lng; // 經度
        popup
          .setLatLng(e.latlng)
          .setContent('You clicked the map at ' + e.latlng.toString())
          .openOn(mymap);
      }

      mymap.on('click', onMapClick);
    });
  }

  onClickBtn(): void {
    console.log('Btn1');
    this.map.setView([22.992, 120.3], 16, {});
  }

  onClickBtn2(): void {
    console.log('Btn2');
    this.map.setView([22.992, 120.2], 16); // 動態設定
  }

  onClickBtn3(): void {
    console.log('Btn3');
    this.map.setView([22.992, 120.239], 14); // 動態設定
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.hasOwnProperty('features'));
		console.log("ngOnChanges");
  }


  initMap(): void {
    // 網頁載入完畢
    document.addEventListener('DOMContentLoaded', (event) => {
      this.map = L.map('' + this.MapId + '', {
        center: [25.0249211, 121.5075035],
        zoom: 16,
      }); //指定欲繪製地圖在id為map的元素中，中心座標為[25.0249211,121.5075035]，縮放程度為16
      const tiles = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 19,
          attribution:
            '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      );

      tiles.addTo(this.map);

      console.log('zzzzz');
    });
  }
}
