import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariofooterComponent } from './usuariofooter.component';

describe('UsuariofooterComponent', () => {
  let component: UsuariofooterComponent;
  let fixture: ComponentFixture<UsuariofooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariofooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariofooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
