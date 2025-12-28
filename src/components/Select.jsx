import React, {useId} from 'react'

function Select({
    label,
    options,
    className = "",
    ...props
}, ref) {
  const id = useId()
    return (
    <div className='w-full'>
        {label && <label className="" htmlFor={id}>{label}</label>}
        <select 
        {...props}
        id={id}
        ref={ref}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        >
            {options?.map((option) => (
                <option value={option} key={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)