import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {DataProvider} from "../../providers/data/data";
import {Post} from "../../model/post";

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: DataProvider) {
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
    this.service.loadPosts('http://createdaily.ch/nili.json').subscribe(
      (posts) => this.posts = posts
    )
  }

}
