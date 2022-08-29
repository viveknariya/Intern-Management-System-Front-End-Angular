import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/http.service';

import { AddLeaveComponent } from './add-leave.component';

describe('AddLeaveComponent', () => {
  let component: AddLeaveComponent;
  let fixture: ComponentFixture<AddLeaveComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AddLeaveComponent],
      imports: [HttpService]
    })
      .compileComponents();


  });

  it('should create', () => {
    fixture = TestBed.createComponent(AddLeaveComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
