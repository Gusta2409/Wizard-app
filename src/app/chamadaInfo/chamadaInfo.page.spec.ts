import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChamadaInfoPage } from './chamadaInfo.page';

describe('ChamadaInfoPage', () => {
  let component: ChamadaInfoPage;
  let fixture: ComponentFixture<ChamadaInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadaInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChamadaInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});