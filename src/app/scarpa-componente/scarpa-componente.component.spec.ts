import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarpaComponenteComponent } from './scarpa-componente.component';

describe('ScarpaComponenteComponent', () => {
  let component: ScarpaComponenteComponent;
  let fixture: ComponentFixture<ScarpaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScarpaComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScarpaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
