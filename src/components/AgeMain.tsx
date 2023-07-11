import Input from "./Input";
import AgeCalc from "./AgeCalc";
import Arrow from "../assets/icon-arrow.svg";
import { useEffect, useState } from "react";
import { FormInputInterface, AgeCalcProps } from "../utilities.tsx/Interfaces";
import { validateForm } from "../utilities.tsx/validateForm";

const defaultFormState: FormInputInterface = {
	year: { value: "", hasError: false, errorType: "" },
	month: { value: "", hasError: false, errorType: "" },
	day: { value: "", hasError: false, errorType: "" },
};

const defaultAgeState: AgeCalcProps = {
	years: "",
	months: "",
	days: "",
};

const AgeMain = () => {
	const [inputState, setInputState] =
		useState<FormInputInterface>(defaultFormState);

	const [age, setAge] = useState<AgeCalcProps>(defaultAgeState);

	const handleSubmit = () => {
		validateForm(setInputState, inputState, setAge);
	};

	useEffect(() => {
		console.log("inputState: ", inputState);
	}, [inputState]);

	return (
		<div className="flex h-fit w-full flex-col justify-center rounded-t-3xl rounded-bl-3xl rounded-br-9xl bg-white px-10 py-20 shadow-2xl md:max-w-8xl md:px-28 md:py-24 lg:rounded-t-4xl lg:rounded-bl-4xl lg:rounded-br-18xl lg:pr-20 ">
			<form
				className="flex w-full max-w-3xl gap-7 overflow-x-hidden lg:max-w-4xl lg:gap-16"
				action=""
			>
				<Input
					inputState={inputState}
					stateSetter={setInputState}
					label="DAY"
					placeholder="DD"
				/>
				<Input
					inputState={inputState}
					stateSetter={setInputState}
					label="MONTH"
					placeholder="MM"
				/>
				<Input
					inputState={inputState}
					stateSetter={setInputState}
					label="YEAR"
					placeholder="YYYY"
				/>
			</form>

			<div className="relative mb-12 mt-12 flex flex-col items-center justify-center md:mb-8 md:items-end lg:m-0">
				<button className="flex justify-center" onClick={handleSubmit}>
					<img
						className="mt relative z-10 h-28 w-28 cursor-pointer rounded-full bg-purple p-10 hover:bg-off-black md:h-36 md:w-36 md:p-10 lg:h-40 lg:w-40 lg:p-10"
						src={Arrow}
						alt=""
					/>
				</button>
				<div className="absolute top-1/2 h-1 w-full border-t-2 text-light-grey"></div>
			</div>
			<div className="flex w-full justify-between">
				<AgeCalc
					inputState={inputState}
					years={age.years}
					months={age.months}
					days={age.days}
				/>
			</div>
		</div>
	);
};

export default AgeMain;
