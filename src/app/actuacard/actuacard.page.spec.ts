import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActuacardPage } from './actuacard.page';

describe('ActuacardPage', () => {
  let component: ActuacardPage;
  let fixture: ComponentFixture<ActuacardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuacardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActuacardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
