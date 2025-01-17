import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneInvoicesComponent } from './done-invoices.component';

describe('DoneInvoicesComponent', () => {
  let component: DoneInvoicesComponent;
  let fixture: ComponentFixture<DoneInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoneInvoicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
