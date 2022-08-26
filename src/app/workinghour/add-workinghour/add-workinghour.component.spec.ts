import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkinghourComponent } from './add-workinghour.component';

describe('AddWorkinghourComponent', () => {
  let component: AddWorkinghourComponent;
  let fixture: ComponentFixture<AddWorkinghourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkinghourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkinghourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
