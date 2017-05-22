import {NgModule, ErrorHandler} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {IonicApp, IonicModule, IonicErrorHandler, DeepLinkConfig} from "ionic-angular";
import {MyApp} from "./app.component";
import {TabsPage} from "../pages/tabs/tabs";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {DataProvider} from "../providers/data/data";
import {PostsPage} from "../pages/posts/posts";
import {HttpModule} from "@angular/http";
import {PostCardComponent} from "../components/post-card/post-card";
import {PostPage} from "../pages/post/post";

@NgModule({
  declarations: [
    MyApp,
    PostsPage,
    PostPage,
    TabsPage,
    PostCardComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {
      links: [
        {component: PostsPage, name: 'Posts', segment: 'posts'},
        {component: PostPage, name: 'Post', segment: 'detail/:id'}
      ]
    }),
    BrowserModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostsPage,
    PostPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {
}
