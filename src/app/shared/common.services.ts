import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommonService {
  toggleHeader = new Subject();
  constructor() { }
}
