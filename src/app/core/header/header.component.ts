import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth/auth.sevice';
import { DataStorageService } from '../../shared/data-storage.service';
import { CommonService } from 'src/app/shared/common.services';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isToggle;
  authState: Observable<fromAuth.State>;

  @ViewChild('navbarNavDropdown') navbarNavDropdown: ElementRef;

  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService, private commonService: CommonService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.isToggle = false;
    this.commonService.toggleHeader
      .subscribe(
        isToggle => this.isToggle = isToggle
      );
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.saveRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
    this.toggleHeader();
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
    this.toggleHeader();

  }

  onLogout() {
    this.authService.logout();
    this.toggleHeader();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  toggleHeader() {
    if(this.navbarNavDropdown.nativeElement.classList.contains('show')){
      this.isToggle = false;
    } else {
      this.isToggle = true;
    }
    this.commonService.toggleHeader.next(this.isToggle);
  }
}
