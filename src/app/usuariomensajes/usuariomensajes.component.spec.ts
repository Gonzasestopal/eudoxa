import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariomensajesComponent } from './usuariomensajes.component';

describe('UsuariomensajesComponent', () => {
  let component: UsuariomensajesComponent;
  let fixture: ComponentFixture<UsuariomensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariomensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariomensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
