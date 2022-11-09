import React from 'react';

const Signup = () => (
	<div className="bg-grey-lighter min-h-screen flex flex-col">
		<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
			<div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
				<input
					type="text"
					className="block border border-grey-light w-full p-3 rounded mb-4"
					name="fullname"
					placeholder="Full Name"/>

				<input
					type="text"
					className="block border border-grey-light w-full p-3 rounded mb-4"
					name="email"
					placeholder="Email"/>

				<input
					type="password"
					className="block border border-grey-light w-full p-3 rounded mb-4"
					name="password"
					placeholder="Password"/>
				<input
					type="password"
					className="block border border-grey-light w-full p-3 rounded mb-4"
					name="confirm_password"
					placeholder="Confirm Password"/>

				<div className="flex justify-center">
					<span className="p-3 px-25 pt-2 text-white bg-brightRed baseline hover:bg-brightRedLight">
						Sign Up
					</span>
				</div>
			</div>
		</div>
	</div>
);

export default Signup;