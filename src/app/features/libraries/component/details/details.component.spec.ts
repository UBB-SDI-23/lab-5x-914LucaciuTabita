import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariesDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: LibrariesDetailsComponent;
  let fixture: ComponentFixture<LibrariesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrariesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrariesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
