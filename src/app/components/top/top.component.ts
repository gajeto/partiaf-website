import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  @Input() color;
  public current = "home";
  isBrowser;
  constructor(private router:Router,@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
   }

  ngOnInit() {
    this.current=this.router.url.split('/')[1];
    if (this.isBrowser) { 
      window.scrollTo(0, 0);
    } 
  }

}
