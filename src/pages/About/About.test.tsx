import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import About from './About';

describe('About page..', () => {
    it('can render', () => {
        const component = ReactTestUtils.renderIntoDocument<About>(<About />)
        expect(component).toBeDefined();
    });
});