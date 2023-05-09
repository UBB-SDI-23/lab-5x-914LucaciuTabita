import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariesOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: LibrariesOverviewComponent;
  let fixture: ComponentFixture<LibrariesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrariesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrariesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
