import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Radicacion } from './radicacion';

describe('Radicacion', () => {
  let component: Radicacion;
  let fixture: ComponentFixture<Radicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Radicacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Radicacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
