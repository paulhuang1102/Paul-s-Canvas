import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  private small: boolean = false;
  private haederRef;
  private anchor: number = 0;

  @HostListener('window:scroll', ['$event']) onScroll($event) {
    const y = window.pageYOffset;

    if (y > 80 && !this.small) {
      this.anchor = y;
      this.small = true;
    }
    if (y <= this.haederRef.offsetHeight && this.small) {
      this.small = false;
    }
  }

  ngOnInit() {
    this.haederRef = this.elementRef.nativeElement.querySelector('header');
  }


}
