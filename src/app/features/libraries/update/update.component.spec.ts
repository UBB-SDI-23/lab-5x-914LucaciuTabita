import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariesUpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: LibrariesUpdateComponent;
  let fixture: ComponentFixture<LibrariesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrariesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrariesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
