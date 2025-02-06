import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsBreadcrumbComponent } from './reds-breadcrumb.component';

describe('RedsBreadcrumbComponent', () => {
  let component: RedsBreadcrumbComponent;
  let fixture: ComponentFixture<RedsBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedsBreadcrumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
