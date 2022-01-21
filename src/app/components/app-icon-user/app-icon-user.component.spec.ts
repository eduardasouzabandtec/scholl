import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIconUserComponent } from './app-icon-user.component';

describe('AppIconUserComponent', () => {
  let component: AppIconUserComponent;
  let fixture: ComponentFixture<AppIconUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppIconUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppIconUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
