import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeListComponent } from './receipe-list.component';

describe('ReceipeListComponent', () => {
  let component: ReceipeListComponent;
  let fixture: ComponentFixture<ReceipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
