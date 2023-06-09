import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoldierComponent } from './add-soldier-page.component';

describe('AddSoldierComponent', () => {
  let component: AddSoldierComponent;
  let fixture: ComponentFixture<AddSoldierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSoldierComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddSoldierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
