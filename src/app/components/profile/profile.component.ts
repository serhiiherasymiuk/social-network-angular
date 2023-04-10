import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  currentUserId: string;
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentUserId = params['id'];
    });
  }
}
