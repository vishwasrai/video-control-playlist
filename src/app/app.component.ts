import { Component } from '@angular/core';

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  playlist: Array<IMedia> = [
    {
        title: 'Pale Blue Dot',
        src: 'http://static.videogular.com/assets/videos/videogular.mp4',
        type: 'video/mp4'
    },
    {
        title: 'Big Buck Bunny',
        src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
        type: 'video/mp4'
    },
    {
        title: 'Elephants Dream',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        type: 'video/mp4'
    }
  ];

  currentIndex = 0;
  currentItem: IMedia = this.playlist[ this.currentIndex ];

  constructor() {
  }


  nextVideo() {
  this.currentIndex++;

  if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
  }

  this.currentItem = this.playlist[ this.currentIndex ];
  }


  onClickPlaylistItem(item: IMedia, index: number) {
  this.currentIndex = index;
  this.currentItem = item;
  }

  addNewPlaylistItem(playlist : IMedia) {
    console.log(playlist.title);
    console.log(playlist.src);
    console.log(playlist.type);
    this.playlist.push(playlist);
  }

  deletePlaylistItem() {
    this.playlist.pop();
  }
}