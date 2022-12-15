import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { authInterceptor } from "./auth.interceptor";

export const HttpInterceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true }];