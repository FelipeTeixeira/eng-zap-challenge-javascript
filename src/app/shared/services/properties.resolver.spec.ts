import { TestBed } from '@angular/core/testing';
import { TransferState } from '@angular/platform-browser';
import PropertyRulesUtils from '../utils/property-rules.util';

import { PropertiesResolver } from './properties.resolver';
import { PropertyService } from './property.service';

describe('PropertiesResolver', () => {
    let resolver: PropertiesResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PropertyService,
                TransferState,
                PropertyRulesUtils
            ]
        });
        resolver = TestBed.inject(PropertiesResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
