import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElisasComponent } from './elisas.component';

describe('ElisasComponent', () => {
  let component: ElisasComponent;
  let fixture: ComponentFixture<ElisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElisasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
