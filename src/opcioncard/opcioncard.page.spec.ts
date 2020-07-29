import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpcioncardPage } from './opcioncard.page';

describe('OpcioncardPage', () => {
  let component: OpcioncardPage;
  let fixture: ComponentFixture<OpcioncardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcioncardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcioncardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
