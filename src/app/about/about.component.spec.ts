import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutComponent} from './about.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

// npm

describe('AboutComponent', () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(async (() => {
        TestBed
            .configureTestingModule(
                {imports: [RouterTestingModule], declarations: [AboutComponent], providers: []}
            )
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
