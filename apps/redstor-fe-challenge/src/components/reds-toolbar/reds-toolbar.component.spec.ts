import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsToolbarComponent } from './reds-toolbar.component';

describe('RedsToolbarComponent', () => {
  let component: RedsToolbarComponent;
  let fixture: ComponentFixture<RedsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedsToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
