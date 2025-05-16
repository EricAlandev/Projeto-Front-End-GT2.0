// src/components/FilterGroup/FilterGroup.jsx
import React from 'react';

const FilterGroup = ({ title, inputType = 'checkbox', options = [], name, onChange, selectedValues = [] }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-dark-gray-2 text-sm font-semibold mb-3">{title}</h3>
      <hr className="border-light-gray-2 mb-3" />
      <div className="flex flex-col gap-3">
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          const isChecked = selectedValues.includes(option.value);

          return (
            <label key={id} htmlFor={id} className="flex items-center gap-2 text-dark-gray-2 text-sm cursor-pointer">
              <input
                type={inputType}
                id={id}
                name={name}
                value={option.value}
                checked={isChecked}
                onChange={onChange}
                className="w-[18px] h-[18px] accent-primary"
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterGroup;
