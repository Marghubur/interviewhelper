import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  safeHtml!: SafeHtml;
  questionNumbers: Array<number> = [];
  constructor(private http: HttpClient,
              private sanitizer: DomSanitizer
  ){}
  ngOnInit() {
    this.loadData();
    for (let i = 0; i < 500; i++) {
      this.questionNumbers.push(i+1);
    }
  }

  private loadData() {
    this.http.get("assets/dotnet.json").subscribe({
      next: (res: any) => {
        this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(res);
      },error(err) {
        console.log(err)
      },
    })
  }

}
