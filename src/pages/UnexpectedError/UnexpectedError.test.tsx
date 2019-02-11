import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import UnexpectedError from './UnexpectedError';

describe('UnexpectedError page..', () => {
    it('can render', () => {
        const component = ReactTestUtils.renderIntoDocument<UnexpectedError>(<UnexpectedError />)
        expect(component).toBeDefined();
    });
});