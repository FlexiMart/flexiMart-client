import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuDialogComponent } from './side-menu-dialog.component';

describe('SideMenuDialogComponent', () => {
  let component: SideMenuDialogComponent;
  let fixture: ComponentFixture<SideMenuDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
