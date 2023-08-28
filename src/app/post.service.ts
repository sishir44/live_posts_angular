import { EventEmitter, Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({ providedIn:'root'})
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
    listOfPosts: Post[] = [
        new Post(
          'Developer',
          'Build, test, and deploy beautiful web, mobile, desktop and embedded apps from one codebase. Promote your website, products, and app to the right users with Google Ads. A platform to share machine learning data sets, explore and build models, and compete in competitions. The web development framework for building the future.',
          'https://swiftlet.co.th/wp-content/uploads/2020/01/Software-Developer.jpg',
          'devccr@techy.com',
          new Date(),
          0
        )
    
        // new Post(
        //   'B',
        //   '"Nature" can refer to the phenomena of the physical world, and also to life in general.The study of nature is a large, if not the only, part of science. Although humans are part',
        //   'https://wallpapercave.com/wp/SNZTtTv.jpg',
        //   'devccr@techy.com',
        //   new Date(),
        //   4
        // ),
    
        // new Post(
        //   'C',
        //   '"Nature" can refer to the phenomena of the physical world, and also to life in general.The study of nature is a large, if not the only, part of science. Although humans are part',
        //   'https://wallpapercave.com/wp/SNZTtTv.jpg',
        //   'devccr@techy.com',
        //   new Date(),
        //   3
        // ),
    ];
    
    // facility 1
    getPosts(){
        return this.listOfPosts;
    }

    //facility 2
    deletePosts(index:number){
        this.listOfPosts.splice(index,1);
    }

    //facility 3
    addPosts(post:Post){
        this.listOfPosts.push(post);
    }

    //facility 4
    updatePosts(index:number, post:Post ) {
        this.listOfPosts[index] = post;
    }

    //facility 5
    getPost(index: number) {
      return this.listOfPosts[index];
    }

    //facility 6
    likePost(index: number) {
      return this.listOfPosts[index].numberOfLikes += 1;
    }

    // facility 7
    setPosts(listOfPosts: Post[]){
      this.listOfPosts = listOfPosts; //this.listOfPosts is existing list & listOfPosts is list coming from dbs
      this.listChangedEvent.emit(listOfPosts);
    }
}