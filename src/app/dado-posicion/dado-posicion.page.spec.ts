import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadoPosicionPage } from './dado-posicion.page';

describe('DadoPosicionPage', () => {
  let component: DadoPosicionPage;
  let fixture: ComponentFixture<DadoPosicionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadoPosicionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadoPosicionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
