import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorComponent, NgxEditorMenuComponent, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [NgxEditorComponent, NgxEditorMenuComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit {
  blogPost : BlogPost = {content: '', title: ''};
  editorForm!:FormGroup;
  editor!: Editor;
   toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['horizontal_rule', 'format_clear'],
    ['indent', 'outdent'],
    ['superscript', 'subscript'],
    ['undo', 'redo'],
  ];
  colorPresets = ['red', 'black', 'white', 'green', 'yellow'];
  constructor(private fb: FormBuilder,
              private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.editor = new Editor();
    this.initForm();
    this.loadData();
  }

  loadData() {
    this.http.get("assets/title.json").subscribe({
      next: (res: any) => {
        this.editorForm.patchValue({
          EditorContent: res
        })
      },error(err) {
        console.log(err)
      },
    })
  }

  initForm() {
    this.editorForm = this.fb.group({
      Title: new FormControl(""),
      EditorContent: new FormControl("")
    })
  }

  savePost() {
    if (this.editorForm.invalid) {
      alert('Please enter a title for your blog post');
      return;
    }

   let value = this.editorForm.value;
    // Convert to JSON and create downloadable file
    const blogData = JSON.stringify(value.EditorContent, null, 2);
    const blob = new Blob([blogData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${value.Title.replace(/\s+/g, '-').toLowerCase()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    // Also save to localStorage for quick access
    localStorage.setItem('blogPost', blogData);
    alert('Blog post saved successfully!');
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }  
}

interface BlogPost {
  title: string;
  content: string;
  createdAt?: Date;
  tags?: string[];
}