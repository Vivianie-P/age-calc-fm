import Input from "./Input";
import AgeCalc from "./AgeCalc";
import Arrow from "../assets/icon-arrow.svg";
import { useEffect, useState } from "react";
import { FormInputInterface } from "./Input";

const defaultFormState = {
	year: "",
	month: "",
	day: "",
};

const AgeMain = () => {
	const [inputState, setInputState] =
		useState<FormInputInterface>(defaultFormState);

	useEffect(() => {
		if (inputState.year === "") {
			setInputState({
				...inputState,
				year: "--",
			});
		}
		if (inputState.month === "") {
			setInputState({
				...inputState,
				month: "--",
			});
		}
		if (inputState.day === "") {
			setInputState({
				...inputState,
				day: "--",
			});
		}
	}, [inputState.year, inputState.month, inputState.day]);

	return (
		<div className="flex h-fit w-full max-w-5xl flex-col justify-center rounded-t-3xl rounded-bl-3xl rounded-br-9xl bg-white px-10 py-20">
			<div className="flex w-full max-w-3xl gap-7 overflow-x-hidden">
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
			</div>
			<div className="relative mb-12 mt-12 flex flex-col items-center justify-center ">
				<button>
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
					// change below state values to be the values that are calculated from
					// the user's birthday
					years={inputState.year}
					months={inputState.month}
					days={inputState.day}
				/>
			</div>
		</div>
	);
};

export default AgeMain;
