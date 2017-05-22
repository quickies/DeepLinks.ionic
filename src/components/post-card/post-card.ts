import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Post} from "../../model/post";

@Component({
  selector: 'post-card',
  templateUrl: 'post-card.html'
})
export class PostCardComponent {

  @Output()
  clicked: EventEmitter<any> = new EventEmitter();

  @Input()
  post: Post;

  cardClicked(){
    this.clicked.emit(this.post);
  }
}
