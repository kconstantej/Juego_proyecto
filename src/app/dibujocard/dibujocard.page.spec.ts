import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DibujocardPage } from './dibujocard.page';

describe('DibujocardPage', () => {
  let component: DibujocardPage;
  let fixture: ComponentFixture<DibujocardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DibujocardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DibujocardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
