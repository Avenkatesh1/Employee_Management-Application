import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeProjectComponent } from './empolyee-project.component';

describe('EmpolyeeProjectComponent', () => {
  let component: EmpolyeeProjectComponent;
  let fixture: ComponentFixture<EmpolyeeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpolyeeProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpolyeeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
