import { CanActivateFn } from '@angular/router';

export const accountAccessGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem('token');
  if (token == null) {
    return false;
  }
  else {
    return true;
  }
}
