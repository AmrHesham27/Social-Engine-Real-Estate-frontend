import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/services/user/auth-user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarUserComponent implements OnInit {

  constructor(public _auth:AuthUserService, private router:Router, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.thisPageUrl = this.router.url
  }
  thisPageUrl:string = ''
  handleLogout(){
    this._auth.logout().subscribe(
      (res:any)=>{
        localStorage.removeItem('proToken')
        this._auth.isUserLoggedIn = false
        this.toastr.success('You were logged out successfully', 'Success', { timeOut: 9000 });
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
