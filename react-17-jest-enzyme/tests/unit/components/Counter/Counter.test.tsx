import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { Counter } from '@/components/Counter/Counter';

describe('Counter', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<Counter />);
    });

    it('Component should render correctly', () => {
        // select component root element by class name
        const rootElement = wrapper.find('.rsa-counter');

        //assert the expected result
        expect(rootElement.length).toBe(1);
    });

    it('Counter value should decrement when decrement button is clicked', () => {
        //select the elements you want to interact with
        const counter = wrapper.find('.rsa-counter__counter');
        const decrementBtn = wrapper.find('button').at(0);

        //interact with those elements
        decrementBtn.simulate('click');

        //assert the expected result
        expect(counter.text()).toMatch('-1');
    });

    it('Counter value should increment when increment button is clicked', () => {
        //select the elements you want to interact with
        const counter = wrapper.find('.rsa-counter__counter');
        const incrementBtn = wrapper.find('button').at(1);

        //interact with those elements
        incrementBtn.simulate('click');

        //assert the expected result
        expect(counter.text()).toMatch('1');
    });
});
