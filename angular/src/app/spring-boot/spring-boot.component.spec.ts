import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootComponent } from './spring-boot.component';

describe('SpringBootComponent', () => {
  let component: SpringBootComponent;
  let fixture: ComponentFixture<SpringBootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringBootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
