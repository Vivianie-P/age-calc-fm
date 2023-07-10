export interface AgeCalcProps {
	years: string;
	months: string;
	days: string;
	inputState?: any;
}

export interface FormInputInterface {
	[key: string]: { value: string; hasError: boolean; errorType: string };
	year: { value: string; hasError: boolean; errorType: string };
	month: { value: string; hasError: boolean; errorType: string };
	day: { value: string; hasError: boolean; errorType: string };
}

export interface TextInputProps {
	label: string;
	placeholder: string;
	inputState: FormInputInterface;
	stateSetter: (value: FormInputInterface) => void;
}

export interface ErrorInfoInterface {
	hasError: boolean;
	errorType: string;
}
