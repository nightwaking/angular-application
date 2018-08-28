import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SessionService } from '../base/shared/session.service';

@Injectable()
export class HttpClient {

  http_base_url: string;
  http_basic_auth_user_name: string;
  http_basic_auth_password: string;

  constructor(private http: Http, private sessionService: SessionService) { }
}
