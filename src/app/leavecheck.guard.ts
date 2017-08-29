import { Injectable } from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeavecheckGuard implements CanDeactivate<any> {
   canDeactivate() {
     const answer = confirm('Are you sure want to leave');
     if(answer) {
         return true;
     }
       return false;
   }
}
