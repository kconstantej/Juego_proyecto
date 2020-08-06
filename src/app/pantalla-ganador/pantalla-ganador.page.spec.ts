import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantallaGanadorPage } from './pantalla-ganador.page';

describe('PantallaGanadorPage', () => {
  let component: PantallaGanadorPage;
  let fixture: ComponentFixture<PantallaGanadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaGanadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantallaGanadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
