import { Component, OnInit } from '@angular/core'
import { Ipost } from 'src/app/models/posts'
import { PostsService } from 'src/app/services/post.services'

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  postsArr: Ipost[] = []
  // private _postService = new PostsService()
  constructor (private _postService: PostsService) {}

  ngOnInit (): void {
    this.postsArr = this._postService.getPosts()
  }

  onRemove (id: string) {
    this._postService.removePost(id)
  }
}
