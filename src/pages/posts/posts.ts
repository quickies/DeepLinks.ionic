import {Component} from "@angular/core";
import {IonicPage, LoadingController} from "ionic-angular";
import {DataProvider} from "../../providers/data/data";
import {Post} from "../../model/post";

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  constructor(public service: DataProvider,
              public loading: LoadingController) {
  }

  public posts = Array<Post>();

  chunk(array, size) {
    let position, end, result = [];

    for (position = 0, end = array.length; position < end; position += size) {
      let chunk = array.slice(position, position + size);
      result.push(chunk);
    }
    return result;
  }

  ionViewDidLoad() {

    let loader = this.loading.create({content: 'Loading posts...'});
    loader.present().then(() => {
      this.service.loadPosts('http://createdaily.ch/nili.json').subscribe(
        (posts) => {
          this.posts = posts;
          loader.dismiss();
        }
      );
    });
  }
}
