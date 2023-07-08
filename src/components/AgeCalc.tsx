interface AgeCalcProps {
	years: string;
	months: string;
	days: string;
}

const AgeCalc = (props: AgeCalcProps) => {
	return (
		<div className="flex w-full flex-col text-left text-8xl">
			<h1 className="">
				<span className="text-8xl text-purple">{props.years}</span> years
			</h1>
			<h1 className="">
				<span className="text-8xl text-purple">{props.months}</span> months
			</h1>
			<h1 className="">
				<span className="text-8xl text-purple">{props.days}</span> days
			</h1>
		</div>
	);
};

export default AgeCalc;
