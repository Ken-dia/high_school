import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEleveComponent } from './form-eleve.component';

describe('FormEleveComponent', () => {
  let component: FormEleveComponent;
  let fixture: ComponentFixture<FormEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
