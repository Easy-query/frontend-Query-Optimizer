import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionPlanComponent } from './execution-plan.component';

describe('ExecutionPlanComponent', () => {
  let component: ExecutionPlanComponent;
  let fixture: ComponentFixture<ExecutionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutionPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExecutionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
