import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoVersionComponent } from './todo-version.component';

describe('TodoVersionComponent', () => {
  let component: TodoVersionComponent;
  let fixture: ComponentFixture<TodoVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
