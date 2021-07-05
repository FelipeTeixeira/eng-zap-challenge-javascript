import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { AppShellRenderDirective } from './shared/directives/app-shell-render.directive';
import { CanonicalService } from './shared/services/canonical.service';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppShellRenderDirective, AppComponent],
            providers: [
                {
                    provide: CanonicalService,
                },

            ],
        })

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
