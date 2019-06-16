import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// tslint:disable-next-line: class-name
export class bugInterceptor implements HttpInterceptor {

<<<<<<< HEAD
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({ setHeaders: { Authorization: 'code.hub.ng5.tokenn' } });
    return next.handle(req)
      .pipe(map(event => {
        return event;
      }));

  }
}
=======
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = req.clone({setHeaders: {Authorization: 'code.hub.ng5.tokenn'}});
        return next.handle(req)
        .pipe( map(event => {
        return event;
        }));

        }
    }
>>>>>>> 196c7c2f57d3884e8cf23677ac27da8154800726
