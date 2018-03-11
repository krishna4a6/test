import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketsService {
constructor (private http: Http) {}
 
   getservices(tckettypr) {
    return this.http.get("http://localhost/secprod/chrfms/chrfms/"+tckettypr)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    var body = res.json();
   // console.log(res.json());
  // console.log(body);
    return body|| { };
  }
 
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}