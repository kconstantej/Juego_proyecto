import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnagramaPage } from './anagrama.page';

describe('AnagramaPage', () => {
  let component: AnagramaPage;
  let fixture: ComponentFixture<AnagramaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnagramaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnagramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
