import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshDummyComponent } from './refresh-dummy.component';

describe('RefreshDummyComponent', () => {
  let component: RefreshDummyComponent;
  let fixture: ComponentFixture<RefreshDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
