import { Component, OnInit } from '@angular/core'
import { Ipost } from 'src/app/models/posts'
import { PostsService } from 'src/app/services/post.services'

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  // providers : [PostsService]
})
export class TwoComponent implements OnInit {
  postsArr: Ipost[] = []
  // private _postService = new PostsService()
  constructor (
    private _postService : PostsService
  ) {}

  ngOnInit (): void {
    this.postsArr = this._postService.getPosts()
  }
}
