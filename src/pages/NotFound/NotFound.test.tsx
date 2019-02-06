import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import NotFound from './NotFound';

describe('NotFound page..', () => {
    it('can render', () => {
        const component = ReactTestUtils.renderIntoDocument<NotFound>(<NotFound />)
        expect(component).toBeDefined();
    });
});