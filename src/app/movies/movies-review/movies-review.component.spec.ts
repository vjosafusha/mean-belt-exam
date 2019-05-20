import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesReviewComponent } from './movies-review.component';

describe('MoviesReviewComponent', () => {
  let component: MoviesReviewComponent;
  let fixture: ComponentFixture<MoviesReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
