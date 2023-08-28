import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
 
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [];

  constructor(private PostService: PostService) { }

//ngOnInit is executed when we created the component and execute only once 
  ngOnInit(): void {
    this.listOfPosts = this.PostService.getPosts();
    
    this.PostService.listChangedEvent.subscribe((listOfPosts:Post[]) => {
      this.listOfPosts = this.PostService.getPosts();
    });

    
  }
}
