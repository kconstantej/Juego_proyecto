import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjetivosPage } from './objetivos.page';

describe('ObjetivosPage', () => {
  let component: ObjetivosPage;
  let fixture: ComponentFixture<ObjetivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjetivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
