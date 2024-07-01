import React from 'react';
import { render } from '@testing-library/react';
import TaskContext from './TaskContext';

describe('TaskContext', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TaskContext />);

        expect(baseElement).toBeTruthy();
    });
});