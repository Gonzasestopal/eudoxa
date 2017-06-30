import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariobarraComponent } from './usuariobarra.component';

describe('UsuariobarraComponent', () => {
  let component: UsuariobarraComponent;
  let fixture: ComponentFixture<UsuariobarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariobarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariobarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
