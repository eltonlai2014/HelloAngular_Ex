import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
    this.test2();
  }

  test2(){
    let post_data = {
      userId : "foo中文測試堃碁",
      password : "bar",
    }
    const url = '/api/text.json';
    // post body
  
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    this.http.post(url, post_data, { headers: headers }).subscribe(
      (data) => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      }
    );

  }


  test(){
    console.log("test post");
    this.http.get('assets/text.json')
    .subscribe((result) => {
      console.log(result);
    });    

  }
}
