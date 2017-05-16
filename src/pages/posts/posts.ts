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

  public posts: Array<Post>;

  ionViewDidLoad() {
    this.service.loadPosts('http://createdaily.ch/nili.json').subscribe(
      (data) => {
        this.posts = data;
      }
    )
  }

}
