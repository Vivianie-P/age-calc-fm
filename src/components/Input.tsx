import { FormEvent } from "react";

export interface FormInputInterface {
	[key: string]: { value: string; hasError: boolean; errorType: string };
	year: { value: string; hasError: boolean; errorType: string };
	month: { value: string; hasError: boolean; errorType: string };
	day: { value: string; hasError: boolean; errorType: string };
}

interface TextInputProps {
	label: string;
	placeholder: string;
	inputState: FormInputInterface;
	stateSetter: (value: FormInputInterface) => void;
}

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
				} "font-poppins tracking-widest-2" text-xl md:text-2xl`}
				htmlFor="birthday"
			>
				{props.label}
			</label>
			<input
				placeholder={props.placeholder}
				id="birthday"
				className={`${
					hasError ? "border-light-red" : "border-light-grey"
				}  "h-24 hover:border-purple" : cursor-pointer  rounded-xl border p-4 text-3xl text-off-black placeholder:text-smokey-grey`}
				type="number"
				onChange={handleChange}
			/>
			{errorType === "empty" ? (
				<span className="m-2 w-full italic text-light-red">EMPTY ERROR</span>
			) : (
				""
			)}

			{errorType === "invalid" ? (
				<span className="m-2 w-full italic text-light-red">
					Must be a valid date
				</span>
			) : (
				""
			)}

			{/* {props.inputState[currentInput as keyof FormInputInterface].errorType ===
			"invalid" ? (
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
