import React from 'react';
import CustomButton from './Button';

export default {
    title: 'Button',
    component: CustomButton
}

export const Primary = () => <CustomButton variant="primary">Primary</CustomButton>
export const Secondary = () => <CustomButton variant="secondary">Secondary</CustomButton>
export const Success = () => <CustomButton variant="success">Success</CustomButton>
export const Danger = () => <CustomButton variant="danger">Danger</CustomButton>