import { HomeComponent } from './home.component';

describe('component: home', () => {
  test('have a title of "The title"', () => {
    const component = new HomeComponent();
    expect(component.title).toEqual('The title');
  });
});

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { HomeComponent } from './home.component';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HomeComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
