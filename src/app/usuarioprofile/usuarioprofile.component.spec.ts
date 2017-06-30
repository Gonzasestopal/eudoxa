import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioprofileComponent } from './usuarioprofile.component';

describe('UsuarioprofileComponent', () => {
  let component: UsuarioprofileComponent;
  let fixture: ComponentFixture<UsuarioprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
