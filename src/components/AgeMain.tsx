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
		// if the validateForm function returns true then call
		// the ageCalcConverter function that will convert the date
		// from the input to the age in years months and days
		validateForm(setInputState, inputState, setAge);
	};

	useEffect(() => {
		console.log("inputState: ", inputState);
	}, [inputState]);

	return (
		<div className="flex h-fit w-full max-w-5xl flex-col justify-center rounded-t-3xl rounded-bl-3xl rounded-br-9xl bg-white px-10 py-20">
			<form className="flex w-full max-w-3xl gap-7 overflow-x-hidden" action="">
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

			<div className="relative mb-12 mt-12 flex flex-col items-center justify-center md:items-end">
				<button className="flex justify-center" onClick={handleSubmit}>
					<img
						className="mt relative z-10 h-28 w-28 cursor-pointer rounded-full bg-purple p-8 hover:bg-off-black"
						src={Arrow}
						alt=""
					/>
				</button>
				<div className="absolute top-1/2 h-1 w-full border-t-2 text-light-grey"></div>
			</div>
			<div className="flex w-full">
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
