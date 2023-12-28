import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit{
  returnUrl = '';
  constructor(activatedRoute: ActivatedRoute,private userService: UserService,private router:Router) {
    const params =  activatedRoute.snapshot.params;
    if(!params.token) return;
        console.log(params.token);
    this.userService.verify(params.token).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    });
      
  }
  ngOnInit(): void {
    
  }
}
