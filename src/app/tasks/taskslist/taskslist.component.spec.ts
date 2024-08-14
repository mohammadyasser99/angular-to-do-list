import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskslistComponent } from './taskslist.component';

describe('TaskslistComponent', () => {
  let component: TaskslistComponent;
  let fixture: ComponentFixture<TaskslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
