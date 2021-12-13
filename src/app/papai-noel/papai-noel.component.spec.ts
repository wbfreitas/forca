import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapaiNoelComponent } from './papai-noel.component';

describe('PapaiNoelComponent', () => {
  let component: PapaiNoelComponent;
  let fixture: ComponentFixture<PapaiNoelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapaiNoelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapaiNoelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
