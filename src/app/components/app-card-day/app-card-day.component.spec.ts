import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardDayComponent } from './app-card-day.component';

describe('AppCardDayComponent', () => {
  let component: AppCardDayComponent;
  let fixture: ComponentFixture<AppCardDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCardDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCardDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
