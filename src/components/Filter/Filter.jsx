import PropTypes from 'prop-types';
import React from "react";

import { FilterInput, FilterLabel } from "./Filter.style"

export const Filter = ({ value, onChange }) => {
    return (
        <FilterLabel>
            Find contacts by name
            <FilterInput 
                type="text" 
                value={value} 
                onChange={onChange}
            />
        </FilterLabel>
    )
};

Filter.protoType = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}