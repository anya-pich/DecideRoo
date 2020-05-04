import { useState } from 'react'


export const useInput = initialValue => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		function(event) {
			setValue({
				...value,
				[event.target.id]: event.target.value
			})
		}
	}
}