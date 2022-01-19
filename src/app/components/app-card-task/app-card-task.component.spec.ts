import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AppCardTaskComponent } from './app-card-task.component';

describe('AppCardComponent', () => {
  let component:AppCardTaskComponent;
  let fixture: ComponentFixture<AppCardTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCardTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCardTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
