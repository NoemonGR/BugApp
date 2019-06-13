import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

export class bugInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        req = req.clone({setHeaders: {Authorization: "code.hub.ng5.tokenn"}});
        return next.handle(req)
        .pipe( map(event => {      
        return event;
        }));
    
        }
    }