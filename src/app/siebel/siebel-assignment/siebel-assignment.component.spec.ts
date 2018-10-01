import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiebelAssignmentComponent } from './siebel-assignment.component';

describe('SiebelAssignmentComponent', () => {
  let component: SiebelAssignmentComponent;
  let fixture: ComponentFixture<SiebelAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiebelAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiebelAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
