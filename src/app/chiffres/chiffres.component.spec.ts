import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffresComponent } from './chiffres.component';

describe('ChiffresComponent', () => {
  let component: ChiffresComponent;
  let fixture: ComponentFixture<ChiffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
