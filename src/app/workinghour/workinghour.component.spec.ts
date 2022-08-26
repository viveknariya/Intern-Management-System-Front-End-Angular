import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkinghourComponent } from './workinghour.component';

describe('WorkinghourComponent', () => {
  let component: WorkinghourComponent;
  let fixture: ComponentFixture<WorkinghourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkinghourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkinghourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
