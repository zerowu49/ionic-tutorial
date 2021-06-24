import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onClickSecondPage() {
    console.log("redirecting to /second-page")
    this.router.navigateByUrl('/second-page')
  }

}
