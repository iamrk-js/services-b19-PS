import { Injectable } from '@angular/core'
import { Ipost } from '../models/posts'


@Injectable({
    providedIn : 'root'
})
export class PostsService {
  postsArr: Array<Ipost> = [
    {
      title: 'Javascript',
      content: `JavaScript Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`,
      id: "123"
    },
    {
      title: 'Es6',
      content: `Es6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`,
      id: "124"
    },
    {
      title: 'Typescript',
      content: `Typescript Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`,
      id: "125"
    },
    {
      title: 'Angular',
      content: `Angular Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`,
      id: "126"
    },
    {
      title: 'Node',
      content: `Node Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`,
      id: "127"
    },
    {
      title: 'Express',
      content: `Express Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`,
      id: "128"
    },
    {
      title: 'MongoDB',
      content: `MongoDB Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        excepturi nisi perferendis mollitia consequatur dignissimos quia
        sint officia libero? Repellendus, nostrum alias. Ducimus,
        voluptatibus quis?`,
      id: "129"
    }
  ]

  getPosts (): Array<Ipost> {
    return this.postsArr
  }

  addPost(post : Ipost){
    this.postsArr.push(post)
  }

   removePost(id : string){
    let getIndex = this.postsArr.findIndex(p => p.id == id)
    this.postsArr.splice(getIndex, 1)
  }
}
