import {
	FormInputInterface,
	ErrorInfoInterface,
	AgeCalcProps,
} from "../utilities.tsx/Interfaces";
import moment from "moment";

export const validateForm = (
	stateSetter: (value: FormInputInterface) => void,
	inputState: FormInputInterface,
	ageStateSetter: (param: AgeCalcProps) => void
) => {
	const dayInfo: ErrorInfoInterface = validateDay(inputState);
	const monthInfo: ErrorInfoInterface = validateMonth(inputState);
	const yearInfo: ErrorInfoInterface = validateYear(inputState);

	let dayInputValue = parseInt(inputState.day.value);
	let monthInputValue = parseInt(inputState.month.value) - 1;
	let yearInputValue = parseInt(inputState.year.value);

	const birthDate = new Date(yearInputValue, monthInputValue, dayInputValue);

	let date = new Date(birthDate);
	let day = date.getDate();
	let badDate = false;

	stateSetter({
		day: {
			...inputState["day"],
			hasError: dayInfo.hasError,
			errorType: dayInfo.errorType,
		},
		month: {
			...inputState["month"],
			hasError: monthInfo.hasError,
			errorType: monthInfo.errorType,
		},
		year: {
			...inputState["year"],
			hasError: yearInfo.hasError,
			errorType: yearInfo.errorType,
		},
	});

	if (dayInfo.hasError === false && day != dayInputValue) {
		stateSetter({
			...inputState,
			day: {
				...inputState["day"],
				hasError: true,
				errorType: "badDate",
			},
		});
		badDate = true;
	}

	if (
		dayInfo.hasError === false &&
		monthInfo.hasError === false &&
		yearInfo.hasError === false &&
		badDate === false
	) {
		ageCalcConverter(inputState, ageStateSetter);
	} else {
		ageStateSetter({
			days: "",
			months: "",
			years: "",
		});
	}
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

	if (yearValue > currentYear || yearValue < 0) {
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

export const ageCalcConverter = (
	inputState: FormInputInterface,
	ageStateSetter: (param: AgeCalcProps) => void
) => {
	let dayInputValue = parseInt(inputState.day.value);
	let monthInputValue = parseInt(inputState.month.value) - 1;
	let yearInputValue = parseInt(inputState.year.value);

	const birthDate = new Date(yearInputValue, monthInputValue, dayInputValue);

	birthDate.setUTCFullYear(yearInputValue);

	const currentDate = new Date().getTime();
	const diff = currentDate - birthDate.getTime();
	const duration = moment.duration(diff);

	const timePassedInYears = duration.years();
	const timePassedInDays = duration.days();
	const timePassedInMonths = duration.months();
	const totalDuration = {
		day: timePassedInDays,
		month: timePassedInMonths,
		year: timePassedInYears,
	};

	ageStateSetter({
		days: String(totalDuration.day),
		months: String(totalDuration.month),
		years: String(totalDuration.year),
	});
};
