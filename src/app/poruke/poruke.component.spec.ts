import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorukeComponent } from './poruke.component';

describe('PorukeComponent', () => {
  let component: PorukeComponent;
  let fixture: ComponentFixture<PorukeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorukeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorukeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
