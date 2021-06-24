import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
  ) { }

  onClick() {
    console.log("Button is clicked")
  }

  onClickFirstPage() {
    console.log("redirecting to /first-page")
    this.router.navigateByUrl('/first-page')
  }
}
