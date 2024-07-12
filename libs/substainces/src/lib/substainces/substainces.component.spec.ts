import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubstaincesComponent } from './substainces.component';

describe('SubstaincesComponent', () => {
  let component: SubstaincesComponent;
  let fixture: ComponentFixture<SubstaincesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubstaincesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubstaincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
