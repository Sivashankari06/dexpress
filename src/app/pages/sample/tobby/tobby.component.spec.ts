import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobbyComponent } from './tobby.component';

describe('TobbyComponent', () => {
  let component: TobbyComponent;
  let fixture: ComponentFixture<TobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
