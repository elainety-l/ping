import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PingPage } from './ping.page';

describe('PingPage', () => {
  let component: PingPage;
  let fixture: ComponentFixture<PingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
