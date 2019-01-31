import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsOfComponent } from './comments-of.component';

describe('CommentsOfComponent', () => {
  let component: CommentsOfComponent;
  let fixture: ComponentFixture<CommentsOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
