import App from '../src/Components/App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<App />)

        expect(wrapper.find('h1').text()).toBe('Embers Start Fires. This fire is RE@cT')
        expect(wrapper).toMatchSnapshot
    })
})