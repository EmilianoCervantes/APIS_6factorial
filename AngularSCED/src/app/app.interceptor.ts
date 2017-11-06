import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('Interceptor: ', req);
        const authReq = req.clone({
            headers: req.headers.set('access-control-allow-origin', '*')
        });
        console.log('Interceptor 2: ', req);
        return next.handle(authReq);
    }
    
}