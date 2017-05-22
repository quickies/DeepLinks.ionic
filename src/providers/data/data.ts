import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {Post} from "../../model/post";

@Injectable()
export class DataProvider {

  constructor(public http: Http) {
  }

  loadPosts(resourceURL: any): Observable<Post[]> {
    return this.http.get(resourceURL)
      .map(res => res.json())
      .map(json => Post.deserializeList(json.posts));
  }

  loadPost(resourceURL: any): Observable<Post> {
    return this.http.get(resourceURL)
      .map(res => res.json())
      .map(json => new Post().deserialize(json));
  }
}
