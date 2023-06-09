import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSoldierPageComponent } from './update-soldier-page.component';

describe('UpdateSoldierPageComponent', () => {
  let component: UpdateSoldierPageComponent;
  let fixture: ComponentFixture<UpdateSoldierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSoldierPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSoldierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
