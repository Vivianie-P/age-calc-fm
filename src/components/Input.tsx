import { FormEvent } from "react";
import {
	FormInputInterface,
	TextInputProps,
} from "../utilities.tsx/Interfaces";

const Input = (props: TextInputProps) => {
	const currentInput = props.label.toLowerCase();
	const errorType = props.inputState[currentInput].errorType;
	const hasError = props.inputState[currentInput].hasError;

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
		<div className="flex flex-col justify-center overflow-x-hidden">
			<label
				className={`${
					hasError ? "text-light-red" : "text-smokey-grey"
				} font-poppins text-xl tracking-widest-2 md:text-2xl`}
				htmlFor="birthday"
			>
				{props.label}
			</label>
			<input
				placeholder={props.placeholder}
				id="birthday"
				className={`${
					hasError ? "border-light-red hover:border-light-red" : "border-light-grey"
				}  ${`md:h-30 h-24 cursor-pointer rounded-xl border p-4 text-3xl text-off-black placeholder:text-smokey-grey hover:border-purple focus:outline-none`}`}
				type="number"
				onChange={handleChange}
			/>
			{errorType === "empty" ? (
				<span className="m-2 w-full border-light-red text-lg italic text-light-red">
					This field is required
				</span>
			) : (
				""
			)}

			{errorType === "invalid" ? (
				<span className="m-2 w-full border-light-red text-lg italic text-light-red">
					{`Must be a valid ${props.label}`}
				</span>
			) : (
				""
			)}

			{/* {hasError ? (
				<span className="text-light-red">INVALID YEAR ERROR</span>
			) : (
				""
			)} */}

			{/* {props.inputState[currentInput as keyof FormInputInterface].errorType ===
			"empty" ? (
				<span className="text-light-red">EMPTY YEAR ERROR</span>
			) : (
				""
			)} */}
		</div>
	);
};

export default Input;
