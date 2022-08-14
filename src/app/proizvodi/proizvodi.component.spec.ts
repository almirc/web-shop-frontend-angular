import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodiComponent } from './proizvodi.component';

describe('ProizvodiComponent', () => {
  let component: ProizvodiComponent;
  let fixture: ComponentFixture<ProizvodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvodiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
