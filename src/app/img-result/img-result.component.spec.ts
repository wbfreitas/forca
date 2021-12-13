import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgResultComponent } from './img-result.component';

describe('ImgResultComponent', () => {
  let component: ImgResultComponent;
  let fixture: ComponentFixture<ImgResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
