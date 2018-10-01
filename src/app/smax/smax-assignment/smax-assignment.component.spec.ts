import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmaxAssignmentComponent } from './smax-assignment.component';

describe('SmaxAssignmentComponent', () => {
  let component: SmaxAssignmentComponent;
  let fixture: ComponentFixture<SmaxAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmaxAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmaxAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
