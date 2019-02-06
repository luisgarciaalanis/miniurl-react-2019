import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import MakeTiny from './MakeTiny';
import { MemoryRouter } from 'react-router';
import * as sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as usecase from '../../usecases/minifyUrl';

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

describe('MakeTiny page..', () => {
    let findUrlStub: sinon.SinonStub | null;

    afterEach(() => {
        if (findUrlStub) {
            findUrlStub.restore();
            findUrlStub = null;
        }
    });

    it('can render', () => {
        let mock: any = jest.fn();
        const component = ReactTestUtils.renderIntoDocument<MakeTiny>(
            <MemoryRouter><MakeTiny history={mock} location={mock} match={mock} /></MemoryRouter>
        );
        expect(component).toBeDefined();
    });

    it('can render', (done) => {
        const testHash = 'abc';
        const testUrl = 'http://www.google.com/';

        findUrlStub = sinon.stub(usecase, 'minifyUrl').resolves(testHash);

        if (!findUrlStub) {
            throw new Error('sinon stub for minifyUrl is null');
        }

        let mock: any = jest.fn();
        const wrapper = shallow(<MakeTiny history={mock} location={mock} match={mock} />)
        expect(wrapper).toBeDefined();

        const button = wrapper.find('#tinify');
        expect(button).toBeDefined();
        const inputBox = wrapper.find('input[type="text"]');
        expect(inputBox).toBeDefined();

        inputBox.simulate('change', { currentTarget: { value: testUrl } })
        button.simulate('click');

        setTimeout(() => {
            if (!findUrlStub) {
                throw new Error('sinon stub for minifyUrl is null');
            }

            expect(findUrlStub.calledWith(testUrl)).toBe(true);
            expect(wrapper.state('hash')).toBe(testHash);
            done();
        }, 0);
    });
});