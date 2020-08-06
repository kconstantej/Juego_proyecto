import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadoGanadorPage } from './dado-ganador.page';

describe('DadoGanadorPage', () => {
  let component: DadoGanadorPage;
  let fixture: ComponentFixture<DadoGanadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadoGanadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadoGanadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
