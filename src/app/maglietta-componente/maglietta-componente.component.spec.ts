import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagliettaComponenteComponent } from './maglietta-componente.component';

describe('MagliettaComponenteComponent', () => {
  let component: MagliettaComponenteComponent;
  let fixture: ComponentFixture<MagliettaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagliettaComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagliettaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
