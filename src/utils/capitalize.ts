/* Capitize first letter of the sentence */
export const capitalizeFirstLetter = (str?: string) => {
	if (!str) return "";

	return str.charAt(0).toUpperCase() + str.slice(1);
};

/* Capitize first letter of each word in the sentence */
export const capitalizeEachWord = (str?: string) => {
	if (!str) return "";

	const arr = str.split(" ");

	//loop through each element of the array and capitalize the first letter.
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	return arr.join(" ");
};
