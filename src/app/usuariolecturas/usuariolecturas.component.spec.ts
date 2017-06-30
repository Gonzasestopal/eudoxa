import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariolecturasComponent } from './usuariolecturas.component';

describe('UsuariolecturasComponent', () => {
  let component: UsuariolecturasComponent;
  let fixture: ComponentFixture<UsuariolecturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariolecturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariolecturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
