import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkinghourComponent } from './edit-workinghour.component';

describe('EditWorkinghourComponent', () => {
  let component: EditWorkinghourComponent;
  let fixture: ComponentFixture<EditWorkinghourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWorkinghourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWorkinghourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
