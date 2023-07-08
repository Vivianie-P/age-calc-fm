import { FormEvent } from "react";

export interface FormInputInterface {
	year: string;
	month: string;
	day: string;
}

interface TextInputProps {
	label: string;
	placeholder: string;
	inputState: FormInputInterface;
	stateSetter: (value: FormInputInterface) => void;
}

const Input = (props: TextInputProps) => {
	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		props.stateSetter({
			...props.inputState,
			[props.label.toLowerCase()]: e.currentTarget.value,
		});
		console.log(e.currentTarget.value);
	};

	return (
		<div className="flex flex-col justify-center overflow-x-hidden">
			<label
				className="font-poppins text-xl tracking-widest-2 text-smokey-grey "
				htmlFor="birthday"
			>
				{props.label}
			</label>
			<input
				placeholder={props.placeholder}
				id="birthday"
				className="h-24 cursor-pointer rounded-xl border border-light-grey p-4 text-3xl text-off-black placeholder:text-smokey-grey hover:border-purple"
				type="number"
				onChange={handleChange}
			/>
		</div>
	);
};

export default Input;
