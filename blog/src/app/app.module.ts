import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosListComponent } from './component/todo-list/todos-list.component';
import { TodosListItemsComponent } from './component/todo-list-item/todos-list-items.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { DefaultBarComponent } from './component/bars/default-bar/default-bar.component';
import { TodoComponent } from './interfaces/todo/todo.component';
import { ArticleComponent } from './interfaces/article/article.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from './views/home/home.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { ArticleFormComponent } from './views/article-form/article-form.component';
import { ActionsBarComponent } from './component/bars/actions-bar/actions-bar.component';
import { ArticleListComponent } from './component/articles/article-list/article-list.component';
import { ArticleListItemComponent } from './component/articles/article-list-item/article-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    TodosListItemsComponent,
    TodoFormComponent,
    DefaultBarComponent,
    TodoComponent,
    ArticleComponent,
    NotFoundComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ArticleFormComponent,
    ActionsBarComponent,
    ArticleListComponent,
    ArticleListItemComponent
  ],
  imports: [
     BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
