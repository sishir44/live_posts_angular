import { Injectable } from "@angular/core";
import { PostService } from "./post.service";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";

@Injectable({providedIn:'root'}) // Injectable is decorator which allows me to use my backend service throughout the project

// Database Path: https://live-posts-ba92a-default-rtdb.firebaseio.com/

// This is my backend service class
export class BackEndService {

    constructor(private postService: PostService, private http: HttpClient){}

    //function-1 -> Save
    saveData(){
        //step-I: get list of posts from post.service
        const listOfPosts: Post[] = this.postService.getPosts();
        
        //step-II: send list of post to backend
        this.http.put('https://live-posts-ba92a-default-rtdb.firebaseio.com/posts.json', listOfPosts)
        .subscribe((res) => {
            console.log(res);
        });
    }

    //function-2 -> Fetch
    fetchData(){
        // 1: get data from db
        this.http.get<Post[]>('https://live-posts-ba92a-default-rtdb.firebaseio.com/posts.json')
        .pipe(
            tap((listOfPosts: Post[]) => {
                console.log(listOfPosts);

                // 2: send to post.service
                this.postService.setPosts(listOfPosts);
            })
        ).subscribe();
    }

} 