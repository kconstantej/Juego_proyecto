import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresoAmarilloPage } from './ingreso-amarillo.page';

describe('IngresoAmarilloPage', () => {
  let component: IngresoAmarilloPage;
  let fixture: ComponentFixture<IngresoAmarilloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoAmarilloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoAmarilloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
