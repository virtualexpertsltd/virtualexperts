import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

export default function Modal({ state, closeHandler, children }) {
	return (
		<>
			{state && (
				<>
					{createPortal(
						<div className="fixed flex justify-center items-center h-screen w-screen left-0 top-0 z-50  bg-opacity-95 bg-dark">
							<span
								className="overlay fixed left-0 top-0 h-full w-full z-10"
								onClick={closeHandler}
							></span>
							<div className="inner w-full p-5 md:p-10 overflow-y-auto max-h-full z-20 scrollbar-hidden relative">
								<div className="text-center mb-6">
									<button
										onClick={closeHandler}
										className="border border-border hover:border-red-500 hover:text-red-500 z-30 transition-all h-8 w-8 rounded-full inline-flex justify-center items-center left-auto right-6 top-3 text-white"
									>
										<FiX />
									</button>
								</div>
								<span
									className="overlay absolute left-0 top-0 h-full w-full -z-10"
									onClick={closeHandler}
								></span>
								{children}
							</div>
						</div>,
						document.getElementById("modal-root")
					)}
				</>
			)}
		</>
	);
}
