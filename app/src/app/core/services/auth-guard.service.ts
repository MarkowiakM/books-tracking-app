import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from './';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {
  private router: Router;
  private authService: AuthService;
  constructor(router: Router, authService: AuthService) {
    this.router = router;
    this.authService = authService;
  }

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    // if (!this.authService.isLoggedIn()) {
    //   this.router.navigate(['log-in'], { queryParams: { retUrl: route.url } });
    //   return false;
    // }
    return true;
  }
}
