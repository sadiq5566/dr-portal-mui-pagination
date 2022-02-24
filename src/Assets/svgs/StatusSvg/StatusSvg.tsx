import React from "react";
interface Props {
	status: string;
	activeClass?: boolean;
}

const colors = {
	new: "#F7CB68",
	accept: "#4362EA",
	locked: "#BF43EA",
	complete: "#24BD86",
	reject: "#D75041",
};
const StatusSvg: React.FC<Props> = ({ status, activeClass }) => {
	return (
		<>
			{activeClass ? (
				<svg
					width="11"
					height="15"
					viewBox="0 0 11 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.25003 6.44999L1.20836 4.40832C0.980861 4.18082 0.619194 4.18082 0.391694 4.40832C0.164194 4.63582 0.164194 4.99749 0.391694 5.22499L2.83586 7.66916C3.06336 7.89666 3.43086 7.89666 3.65836 7.66916L9.84169 1.49166C10.0692 1.26416 10.0692 0.902489 9.84169 0.674989C9.61419 0.447489 9.25253 0.447489 9.02503 0.674989L3.25003 6.44999Z"
						fill="white"
					/>
				</svg>
			) : (
				<svg
					width="8"
					height="8"
					viewBox="0 0 8 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="4"
						cy="4"
						r="4"
						fill={
							status === "new"
								? colors.new
								: status === "accept"
								? colors.accept
								: status === "locked"
								? colors.locked
								: status === "complete"
								? colors.complete
								: status === "reject"
								? colors.reject
								: ""
						}
					/>
				</svg>
			)}
		</>
	);
};

export default StatusSvg;
