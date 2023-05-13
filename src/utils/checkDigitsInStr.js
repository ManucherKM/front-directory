export function checkDigitsInStr(str) {
	let res = 0
	const regexp = /[0-9]/

	for (const letter of str) {
		if (regexp.test(letter)) res++
	}

	return res
}
