import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresoVerdePage } from './ingreso-verde.page';

describe('IngresoVerdePage', () => {
  let component: IngresoVerdePage;
  let fixture: ComponentFixture<IngresoVerdePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoVerdePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoVerdePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
