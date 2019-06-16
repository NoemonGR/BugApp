
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { Story2Service } from './story2.service';
// import { Story2Component } from './story2/story2.component';
// import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
// import { Story2Module } from './story2/story2.module';

// describe('Story2Service', () => {
//   let component: Story2Component;
//   let fixture: ComponentFixture<Story2Component>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [FormsModule],
//       declarations: [
//       ]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(Story2Component);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     const service: Story2Service = TestBed.get(Story2Service);
//     expect(service).toBeTruthy();
//   });

//   // it('form should be Invalid if no data entered ', () => {

//   //   fixture.whenStable().then(() => {
//   //     component.model.title = 'i am a title';
//   //     component.model.description = 'i am a description';
//   //     component.model.priority = ' i am a priority';
//   //     component.model.status = ' i am a status';

//   //     let form = (fixture.debugElement.query(By.css(".form-group")).nativeElement).valid
//   //     expect(form).toBeTruthy();
//   //   });
//   // });

//   // it('form should be Invalid if the title is not at least one character and description at least 5 ', () => {

//   //   fixture.whenStable().then(() => {
//   //     component.model.title = '1 ';
//   //     component.model.description = '12345';
//   //     component.model.priority = ' i am a priority';
//   //     component.model.status = ' i am a status';

//   //     let form = (fixture.debugElement.query(By.css(".form-group")).nativeElement).valid
//   //     expect(form).toBeTruthy();

//   //     component.model.title = ' ';
//   //     component.model.description = '12345';
//   //     component.model.priority = ' i am a priority';
//   //     component.model.status = ' i am a status';

//   //     form = (fixture.debugElement.query(By.css(".form-group")).nativeElement).valid
//   //     expect(form).toBeFalsy();

//   //   });
//   // });


// });
