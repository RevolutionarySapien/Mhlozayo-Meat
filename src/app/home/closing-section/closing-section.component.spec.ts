import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingSectionComponent } from './closing-section.component';

describe('ClosingSectionComponent', () => {
  let component: ClosingSectionComponent;
  let fixture: ComponentFixture<ClosingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosingSectionComponent]
    });
    fixture = TestBed.createComponent(ClosingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
