import {Component, Input} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Post} from "../../model/post";
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  @Input()
  public post: Post;

  postId: string;

  constructor(public navCtrl: NavController,
              public loading: LoadingController,
              public navParams: NavParams,
              public service: DataProvider) {

    this.postId = this.navParams.get('id');
  }

  ionViewDidLoad() {
    let loader = this.loading.create({content: 'Loading post...'});
    loader.present().then(() => {
      this.service.loadPost(`http://createdaily.ch/nili/${this.postId}.json`).subscribe(
        post => {
          this.post = post;
          loader.dismiss();
        });
    });
  }
}
