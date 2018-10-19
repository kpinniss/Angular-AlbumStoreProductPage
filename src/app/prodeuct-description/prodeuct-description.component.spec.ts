import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdeuctDescriptionComponent } from './prodeuct-description.component';

describe('ProdeuctDescriptionComponent', () => {
  let component: ProdeuctDescriptionComponent;
  let fixture: ComponentFixture<ProdeuctDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdeuctDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdeuctDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
