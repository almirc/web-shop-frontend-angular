import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviproizvodiComponent } from './noviproizvodi.component';

describe('NoviproizvodiComponent', () => {
  let component: NoviproizvodiComponent;
  let fixture: ComponentFixture<NoviproizvodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoviproizvodiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviproizvodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
