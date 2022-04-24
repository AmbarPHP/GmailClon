import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMailComponent } from './nuevo-mail.component';

describe('NuevoMailComponent', () => {
  let component: NuevoMailComponent;
  let fixture: ComponentFixture<NuevoMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
