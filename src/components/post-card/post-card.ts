import {Component, Input} from "@angular/core";
import {Post} from "../../model/post";

@Component({
  selector: 'post-card',
  templateUrl: 'post-card.html'
})
export class PostCardComponent {

  @Input()
  post: Post;
}
