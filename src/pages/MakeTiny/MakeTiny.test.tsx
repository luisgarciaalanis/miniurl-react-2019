import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import MakeTiny from './MakeTiny';
import { MemoryRouter } from 'react-router';
import * as sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as usecase from '../../usecases/minifyUrl';
import { HttpError, StatusCodes } from '../../core/http';

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

    it('can shrink a url', (done) => {
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
            expect(findUrlStub!.calledWith(testUrl)).toBe(true);
            expect(wrapper.state('hash')).toBe(testHash);
            done();
        }, 0);
    });

    it('fails to shrink a url', (done) => {
        const testUrl = 'http://www.google.com/';

        findUrlStub = sinon.stub(usecase, 'minifyUrl').rejects(new HttpError('Some error', StatusCodes.BadRequest));

        if (!findUrlStub) {
            throw new Error('sinon stub for minifyUrl is null');
        }

        let mock: any = jest.fn();
        let historyCalledValue = "";
        let mockHistory: any = { push: (val: string) => { historyCalledValue = val } };
        const wrapper = shallow(<MakeTiny history={mockHistory} location={mock} match={mock} />)
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
            expect(wrapper.state('hash')).toBe("");
            expect(wrapper.state('errorMsg')).toBe("Invalid URL! Please try another one.");
            expect(mockHistory.push.called).not.toBe(true)
            expect(historyCalledValue).toBe("")
            done();
        }, 0);
    });

    it('fails to shrink a url with unknown error and redirects to unexpected page', (done) => {
        const testUrl = 'http://www.google.com/';

        findUrlStub = sinon.stub(usecase, 'minifyUrl').rejects();

        if (!findUrlStub) {
            throw new Error('sinon stub for minifyUrl is null');
        }

        let mock: any = jest.fn();
        let historyCalledValue = "";
        let mockHistory: any = { push: (val: string) => { historyCalledValue = val } };
        const wrapper = shallow(<MakeTiny history={mockHistory} location={mock} match={mock} />)
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
            expect(wrapper.state('hash')).toBe("");
            expect(wrapper.state('errorMsg')).not.toBe("Invalid URL! Please try another one.");
            expect(historyCalledValue).toBe("/unexpected")
            done();
        }, 0);
    });
});