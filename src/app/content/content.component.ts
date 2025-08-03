import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  content: any = "";
  constructor(private http: HttpClient){}
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get("assets/title.json").subscribe({
      next: (res: any) => {
        this.content = res;
        console.log(res)
      },error(err) {
        console.log(err)
      },
    })
  }

}
