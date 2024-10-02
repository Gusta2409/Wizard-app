import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TurmaInfoPage } from './turmaInfo.page';

describe('TurmaInfoPage', () => {
  let component: TurmaInfoPage;
  let fixture: ComponentFixture<TurmaInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TurmaInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
