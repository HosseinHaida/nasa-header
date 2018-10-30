import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('nasatvRep') nasatvRep: ElementRef;
  @ViewChild('searchIconBtn') searchIconBtn: ElementRef;
  @ViewChild('searchForm') searchForm: ElementRef;
  screenWidth = window.screen.width;
  toggleNavbar = false;

  constructor(private renderer: Renderer2) {}

  // The search box functionality + some extra css styles for
  // the toggle-open and inputChildIsVisible classes
  onSearchIconClick() {
    if (window.screen.width > 511) {
      this.searchInput.nativeElement.focus();
      if (this.searchInput.nativeElement.value !== '') {
        this.searchForm.nativeElement.submit();
      }
    } else
    if (this.searchInput.nativeElement.value !== '') {
      this.renderer
      .removeClass(
        this.searchForm.nativeElement,
         'inputChildIsVisible');
      this.searchForm.nativeElement.submit();
    } else
    if (!this.searchIconBtn.nativeElement.classList.contains('toggle-open')) {
      this.searchInput.nativeElement.focus();
      if (this.searchInput.nativeElement.value !== '') {
        this.searchForm.nativeElement.submit();
      }
      this.renderer
      .addClass(
        this.searchForm.nativeElement,
         'inputChildIsVisible');
    } else {
      this.renderer
      .removeClass(
        this.searchForm.nativeElement,
         'inputChildIsVisible');
    }
  }
  onNavbarBtnClick() {
    const navbarMenu = document
                        .getElementById('navbar-menu');
    let areaExpanded = document
                        .getElementById('navbar-toggle')
                          .getAttribute('aria-expanded');
    this.toggleNavbar = !this.toggleNavbar;
    if (this.toggleNavbar) {
      navbarMenu.classList.add('shown');
      areaExpanded = 'true';
    } else {
      navbarMenu.classList.remove('shown');
      areaExpanded = 'false';
    }
    document
      .getElementById('navbar-toggle')
        .setAttribute('aria-expanded', areaExpanded);
  }

  ngOnInit() {}
}
