export class Post implements Serializable<Post> {

  public id: string;
  public image: string;
  public title: string;
  public url: string;
  public published_at: string;

  deserialize(input: Object): Post {
    this.id = input['id'];
    this.title = input['title'];
    this.image = input['image'];
    this.url = input['url'];
    this.published_at = input['published_at'];
    return this;
  }

  static deserializeList(list: Array<Object>): Post[] {
    return list.map(post => new Post().deserialize(post))
  }
}
