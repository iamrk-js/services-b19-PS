import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Ipost } from 'src/app/models/posts'
import { PostsService } from 'src/app/services/post.services';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm!: FormGroup;
    // private _postService = new PostsService()
  constructor (
    private _postService : PostsService
  ) {}

  ngOnInit (): void {
    this.postForm = new FormGroup({
      title : new FormControl(null, Validators.required),
      content : new FormControl(null, Validators.required)
    })
  }

  onPostAdd(){
    if(this.postForm.valid){
      let obj : Ipost = {...this.postForm.value, id : Date.now().toString()}
      console.log(obj);
      this.postForm.reset()
      this._postService.addPost(obj)
    }
  }
}
