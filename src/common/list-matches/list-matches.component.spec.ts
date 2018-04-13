import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatchesComponent } from './list-matches.component';

describe('ListMatchesComponent', () => {
  let component: ListMatchesComponent;
  let fixture: ComponentFixture<ListMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
