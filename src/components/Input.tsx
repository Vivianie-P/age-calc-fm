import { FormEvent } from "react";
import {
	FormInputInterface,
	TextInputProps,
} from "../utilities.tsx/Interfaces";

const Input = (props: TextInputProps) => {
	const currentInput = props.label.toLowerCase();
	const errorType = props.inputState[currentInput].errorType;
	const hasError = props.inputState[currentInput].hasError;
	const badDateError = props.inputState.day.errorType === "badDate";

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		props.stateSetter({
			...props.inputState,
			[currentInput]: {
				...props.inputState[currentInput as keyof FormInputInterface],
				value: e.currentTarget.value,
			},
		});
	};

	return (
		<div className="flex flex-col overflow-x-hidden lg:w-full">
			<label
				className={`${
					hasError || badDateError ? "text-light-red" : "text-smokey-grey"
				} mb-4 font-poppins text-xl tracking-widest-2 md:text-2xl`}
				htmlFor="birthday"
			>
				{props.label}
			</label>
			<input
				placeholder={props.placeholder}
				id="birthday"
				className={`${
					hasError || badDateError
						? "border-light-red hover:border-light-red"
						: "border-light-grey"
				}  ${`md:h-30 h-24 cursor-pointer items-center rounded-lg border p-4 text-3xl text-off-black placeholder:text-smokey-grey focus-visible:outline-purple lg:h-32 lg:rounded-2xl lg:p-0 lg:px-8 lg:text-5xl`}`}
				type="number"
				onChange={handleChange}
			/>

			{errorType === "badDate" && (
				<span className="m-2 w-full border-light-red text-lg italic text-light-red">
					Must be a valid date
				</span>
			)}

			{errorType === "empty" && (
				<span className="m-2 w-full border-light-red text-lg italic text-light-red">
					This field is required
				</span>
			)}

			{errorType === "invalid" && props.label !== "YEAR" && (
				<span className="m-2 w-full border-light-red text-lg italic text-light-red">
					{`Must be a valid ${props.label.toLowerCase()}`}
				</span>
			)}

			{props.label === "YEAR" && errorType === "invalid" && (
				<span className="m-2 w-full border-light-red text-lg italic text-light-red">
					Must be in the past
				</span>
			)}
		</div>
	);
};

export default Input;
