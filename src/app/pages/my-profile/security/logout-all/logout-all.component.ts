import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/services/user/auth-user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout-all',
  templateUrl: './logout-all.component.html',
  styleUrls: ['./logout-all.component.css']
})
export class LogoutAllComponent implements OnInit {

  constructor(private _auth:AuthUserService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  logoutAll(){
    this._auth.logoutAll().subscribe(
      (res:any)=>{
        localStorage.removeItem('proToken')
        this._auth.isUserLoggedIn = false
        this.router.navigateByUrl('/')
      },
      (e)=>{
        console.log(e)
        this.toastr.error('please try again', 'Error', { timeOut: 9000 });
      },
      ()=>{}
    )
  }

}
