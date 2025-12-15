import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFuncionario } from './panel-funcionario';

describe('PanelFuncionario', () => {
  let component: PanelFuncionario;
  let fixture: ComponentFixture<PanelFuncionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelFuncionario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelFuncionario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
