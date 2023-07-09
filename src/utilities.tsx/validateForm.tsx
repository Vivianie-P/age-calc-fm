import { FormInputInterface } from "../components/Input";
interface ErrorInfoInterface {
	hasError: boolean;
	errorType: string;
}

export const validateForm = (
	stateSetter: (value: FormInputInterface) => void,
	inputState: FormInputInterface
) => {
	const isValidDay: ErrorInfoInterface = validateDay(inputState);
	const isValidMonth: ErrorInfoInterface = validateMonth(inputState);
	const isValidYear: ErrorInfoInterface = validateYear(inputState);

	// if (isValidDay && isValidMonth && isValidYear) {
	// 	ageCalcConverter(isValidDay, isValidMonth, isValidYear);
	// }
	stateSetter({
		day: {
			...inputState["day"],
			hasError: isValidDay.hasError,
			errorType: isValidDay.errorType,
		},
		month: {
			...inputState["month"],
			hasError: isValidMonth.hasError,
			errorType: isValidMonth.errorType,
		},
		year: {
			...inputState["year"],
			hasError: isValidYear.hasError,
			errorType: isValidYear.errorType,
		},
	});
	// console.log(isValidDay);
	// console.log(isValidMonth);
	// console.log(isValidYear);
};

const validateDay = (inputState: FormInputInterface) => {
	let dayValue: string | number = inputState.day.value;

	if (dayValue === "") {
		return {
			hasError: true,
			errorType: "empty",
		};
	}
	// check if day is a valid day
	dayValue = Number(inputState.day.value);

	if (dayValue < 1 || dayValue > 31) {
		return {
			hasError: true,
			errorType: "invalid",
		};
	} else {
		return {
			hasError: false,
			errorType: "",
		};
	}
};

const validateMonth = (inputState: FormInputInterface) => {
	let monthValue: string | number = inputState.month.value;

	if (monthValue === "") {
		return {
			hasError: true,
			errorType: "empty",
		};
	}

	monthValue = Number(inputState.month.value);

	if (monthValue < 1 || monthValue > 12) {
		return {
			hasError: true,
			errorType: "invalid",
		};
	} else {
		return {
			hasError: false,
			errorType: "",
		};
	}
};

const validateYear = (inputState: FormInputInterface) => {
	let yearValue: string | number = inputState.year.value;

	if (yearValue === "") {
		return {
			hasError: true,
			errorType: "empty",
		};
	}

	yearValue = Number(inputState.year.value);
	const currentYear = new Date().getFullYear();

	if (yearValue > currentYear || yearValue < 1) {
		return {
			hasError: true,
			errorType: "invalid",
		};
	} else {
		return {
			hasError: false,
			errorType: "",
		};
	}
};

// export const ageCalcConverter = (isValidDay, isValidMonth, isValidYear) => {};
