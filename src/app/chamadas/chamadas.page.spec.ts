import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChamadasPage } from './chamadas.page';

describe('ChamadasPage', () => {
  let component: ChamadasPage;
  let fixture: ComponentFixture<ChamadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChamadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
