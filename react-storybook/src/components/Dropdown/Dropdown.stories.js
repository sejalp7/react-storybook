import React from 'react'
import CustomDropdown from './Dropdown'

export default {
    title: 'Dropdown',
    component: CustomDropdown
}

const menu = [{
    name: 'Option 1',
    name:'Option 2',
    name:'Option 3'
}];

export const DropdownButtonSecondary = () => <CustomDropdown variant="success">Dropdown Button Secondary</CustomDropdown>
export const DropdownButtonDanger = () => <CustomDropdown variant="danger">Dropdown Button Danger</CustomDropdown>
export const DropdownButtonPrimary = () => <CustomDropdown variant="primary">Dropdown Button Primary</CustomDropdown>

