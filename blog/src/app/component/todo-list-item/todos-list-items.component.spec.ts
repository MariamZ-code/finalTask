import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosListItemsComponent } from './todos-list-items.component';

describe('TodosListItemsComponent', () => {
  let component: TodosListItemsComponent;
  let fixture: ComponentFixture<TodosListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
