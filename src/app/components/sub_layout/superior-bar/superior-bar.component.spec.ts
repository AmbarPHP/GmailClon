import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiorBarComponent } from './superior-bar.component';

describe('SuperiorBarComponent', () => {
  let component: SuperiorBarComponent;
  let fixture: ComponentFixture<SuperiorBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperiorBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperiorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
