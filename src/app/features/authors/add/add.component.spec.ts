import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsAddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AuthorsAddComponent;
  let fixture: ComponentFixture<AuthorsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
