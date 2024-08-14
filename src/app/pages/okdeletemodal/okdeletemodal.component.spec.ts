import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkdeletemodalComponent } from './okdeletemodal.component';

describe('OkdeletemodalComponent', () => {
  let component: OkdeletemodalComponent;
  let fixture: ComponentFixture<OkdeletemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkdeletemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkdeletemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
