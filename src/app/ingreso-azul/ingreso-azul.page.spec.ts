import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresoAzulPage } from './ingreso-azul.page';

describe('IngresoAzulPage', () => {
  let component: IngresoAzulPage;
  let fixture: ComponentFixture<IngresoAzulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoAzulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoAzulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
