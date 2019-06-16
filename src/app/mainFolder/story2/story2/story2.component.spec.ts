import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Story2Component } from './story2.component';
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';

describe('Story2Component', () => {
  let component: Story2Component;
  let fixture: ComponentFixture<Story2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports : [FormsModule, AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Story2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // tsekarome oti h forma einai invalid an den exei parei times opote dhmioyrgoume component dh
  // dhlwnoyme oti h timh tou description tou newbug einai kenh kai meta leme oti perimenoume to apotelesma
  // ths formas na einai invalid to opoio epistrefei oti ontws einai invalid

  it('Validate that the form is invalid if no data entered', () => {
    component.ngOnInit();
    component.newBug.description = 'x';
    expect(component.newBug.description).toBeFalsy();
  });


});

