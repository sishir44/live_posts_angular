import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthComponent } from './auth/auth.component';

import { RouterModule, Routes } from '@angular/router'; // used in routing
import { ReactiveFormsModule } from '@angular/forms'; // used in Validation
import { HttpClientModule } from '@angular/common/http'; // used to connect with backend 


HttpClientModule


const routes:Routes = [
  {
    path:'',
    redirectTo:'/post-list',
    pathMatch:'full'
  },
  {
    path: 'post-list',
    component: PostListComponent
   },
   {
    path: 'auth',
    component: AuthComponent
   }, 
   {
    path: 'post-add',
    component: PostEditComponent
   },
   {
    path: 'post-edit/:index',
    component: PostEditComponent
   },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    PostEditComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
