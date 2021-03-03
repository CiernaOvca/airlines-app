import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinesOverviewComponent } from './airlines-overview.component';

describe('AirlinesOverviewComponent', () => {
  let component: AirlinesOverviewComponent;
  let fixture: ComponentFixture<AirlinesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlinesOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
