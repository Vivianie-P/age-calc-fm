import { AgeCalcProps } from "../utilities.tsx/Interfaces";

const AgeCalc = (props: AgeCalcProps) => {
	return (
		<div className="flex w-full flex-col text-left text-7xl md:text-9xl">
			<h1 className="">
				<span className="text-7xl text-purple md:text-9xl">
					{props.years ? props.years : "--"}
				</span>{" "}
				years
			</h1>
			<h1 className="">
				<span className="text-7xl text-purple md:text-9xl">
					{props.months ? props.months : "--"}
				</span>{" "}
				months
			</h1>
			<h1 className="">
				<span className="text-7xl text-purple md:text-9xl">
					{props.days ? props.days : "--"}
				</span>{" "}
				days
			</h1>
		</div>
	);
};

export default AgeCalc;
