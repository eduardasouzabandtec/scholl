import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppClassesComponent } from './app-classes.component';

describe('AppClassesComponent', () => {
  let component: AppClassesComponent;
  let fixture: ComponentFixture<AppClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
