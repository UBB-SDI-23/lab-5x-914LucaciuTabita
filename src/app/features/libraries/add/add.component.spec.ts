import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariesAddComponent } from './add.component';

describe('AddComponent', () => {
  let component: LibrariesAddComponent;
  let fixture: ComponentFixture<LibrariesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrariesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrariesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
