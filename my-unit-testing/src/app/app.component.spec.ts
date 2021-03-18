import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// what comp is put under test
// group of related test spec
describe('AppComponent', () => {

  // setup data mocks
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // test spec
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // taking comp.ts testing -- obj of app.comp is created
    expect(app).toBeTruthy(); // expecting app to be present in our app
  });

  // test spec
  it(`should have as title 'my-unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-unit-testing');
  });

  // test spec
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement; // taking app.comp.html for testing
    expect(compiled.querySelector('.content span').textContent).toContain('my-unit-testing app is running!');
  });

  it('should add properly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // taking the comp.ts for testing
    expect(app.add(10, 20)).toBe(30);
    expect(app.add(1, 2)).toBe(3);
  });

  it('should have h1 with Success text', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Success');
  });

  it('should have app name as Calculator v1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.appName).toMatch('Calculator v1');
  });

});
