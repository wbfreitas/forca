import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuzinhasComponent } from './luzinhas.component';

describe('LuzinhasComponent', () => {
  let component: LuzinhasComponent;
  let fixture: ComponentFixture<LuzinhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzinhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
