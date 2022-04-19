import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoraFormComponent } from './gestora-form.component';

describe('GestoraFormComponent', () => {
  let component: GestoraFormComponent;
  let fixture: ComponentFixture<GestoraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestoraFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestoraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
