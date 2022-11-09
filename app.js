import React from 'react';
import ReactDom from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Header from './Components/header';
import TreeContainer from './Components/treeContainer';
import json from './json';
import { resize } from './Reducers/actions';
import Store from './Reducers/store';

// import './style.css';
import './app.css';
import Signup from './signup';
import TreeList from './tree';

window.onresize = resize;

function Home() {
	return (
		<>
			<section id="hero">
				<div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
					<div className="flex flex-col mb-32 space-y-12 md:w-1/2">
						<h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
							You decide your own path to success!
						</h1>
						<p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
							Dont struggle finding the correct path for your life. Analyze with
							Pathfinder and choose the best career suitable for you.
						</p>
						<div className="flex justify-center md:justify-start">
							<Link
								to="/tree"
								class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
								Find Pathway
							</Link>
						</div>
					</div>
					<div className="md:w-1/2">
						<img
							src="https://thumbs.dreamstime.com/b/computer-education-new-technologies-young-man-sitting-table-laptop-home-interior-computer-education-new-technologies-159342589.jpg"
							alt=""/>
					</div>
				</div>
			</section>

			<section id="features" style={{ marginBottom: '35px' }}>
				<div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
					<div className="flex flex-col space-y-12 md:w-1/2">
						<h2 className="max-w-md text-4xl font-bold text-center md:text-left">
							Choose your career wisely. But how?
						</h2>
						<p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
							Here is pathfinder help you in exploring each and every path
							digramatically. So that you can sky rocket your career.
						</p>
					</div>

					<div className="flex flex-col space-y-8 md:w-1/2">
						<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
							<div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
								<div className="flex items-center space-x-2">
									<div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
										01
									</div>
									<h3 className="text-base font-bold md:mb-4 md:hidden">
										Wide range of possibilities
									</h3>
								</div>
							</div>

							<div>
								<h3 className="hidden mb-4 text-lg font-bold md:block">
									Wide range of possibilities
								</h3>
								<p className="text-darkGrayishBlue">
									We have explored thousands of career counselers and used their
									knowledge to bring in wide variety of career paths.
								</p>
							</div>
						</div>

						<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
							<div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
								<div className="flex items-center space-x-2">
									<div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
										02
									</div>
									<h3 className="text-base font-bold md:mb-4 md:hidden">
										Advanced built-in reports
									</h3>
								</div>
							</div>

							<div>
								<h3 className="hidden mb-4 text-lg font-bold md:block">
									Advanced built-in reports
								</h3>
								<p className="text-darkGrayishBlue">
									Set internal delivery estimates and track progress toward
									company goals. Our customisable dashboard helps you build out
									the reports you need to keep key stakeholders informed.
								</p>
							</div>
						</div>

						<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
							<div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
								<div className="flex items-center space-x-2">
									<div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
										03
									</div>
									<h3 className="text-base font-bold md:mb-4 md:hidden">
										Everything you need in one place
									</h3>
								</div>
							</div>

							<div>
								<h3 className="hidden mb-4 text-lg font-bold md:block">
									Everything you need in one place
								</h3>
								<p className="text-darkGrayishBlue">
									Stop jumping from one service to another to communicate, store
									files, track tasks and share documents. Manage offers an
									all-in-one team productivity solution.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id="cta"
				className="bg-brightRed"
				style={{ backgroundColor: '#f36947' }}>
				<div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
					<h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
						Simplify the important decisions of your life today
					</h2>
					<div>
						<Link
							to="/tree"
							class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900">
							Find Pathway
						</Link>
					</div>
				</div>
			</section>

			<footer className="bg-veryDarkBlue" style={{ backgroundColor: '#333' }}>
				<div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
					<div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
						<div className="mx-auto my-6 text-center text-white md:hidden">
							Copyright &copy; 2022, All Rights Reserved
						</div>
						<div>
							<img src="./img/logo-white.png" className="h-8" alt=""/>
						</div>
						<div className="flex justify-center space-x-4">
							<a href="#">
								<img src="./img/icon-facebook.png" alt="" className="h-8"/>
							</a>
							<a href="#">
								<img src="./img/icon-youtube.png" alt="" className="h-8"/>
							</a>
							<a href="#">
								<img src="./img/icon-twitter.png" alt="" className="h-8"/>
							</a>
							<a href="#">
								<img src="./img/icon-pinterest.png" alt="" className="h-8"/>
							</a>
							<a href="#">
								<img src="./img/icon-instagram.png" alt="" className="h-8"/>
							</a>
						</div>
					</div>
					<div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"/>
					<div className="flex justify-around space-x-32">
						<div className="flex flex-col space-y-3 text-white">
							<a href="#" className="hover:text-brightRed">
								Home
							</a>
							<a href="#" className="hover:text-brightRed">
								Pricing
							</a>
							<a href="#" className="hover:text-brightRed">
								Products
							</a>
							<a href="#" className="hover:text-brightRed">
								About
							</a>
						</div>
						<div className="flex flex-col space-y-3 text-white">
							<a href="#" className="hover:text-brightRed">
								Careers
							</a>
							<a href="#" className="hover:text-brightRed">
								Community
							</a>
							<a href="#" className="hover:text-brightRed">
								Privacy Policy
							</a>
						</div>
					</div>

					<div className="flex flex-col justify-between">
						<form>
							<div className="flex space-x-3">
								<input
									type="text"
									className="flex-1 px-4 rounded-full focus:outline-none"
									placeholder="Updated in your inbox"/>
								<button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
									Go
								</button>
							</div>
						</form>
						{/* <div class="hidden text-white md:block">
							Copyright &copy; 2022, All Rights Reserved
						</div> */}
					</div>
				</div>
			</footer>
		</>
	);
}

{
	/* <div id="container">
			<Header filter={state.filter} timestamp={json.timestamp}/>
			<TreeContainer
				activeNode={state.activeNode}
				data={json}
				filter={state.filter}
				height={state.height}
				width={state.width}/>
		</div> */
}

export default function App() {
	return (
		<Router>
			<div>
				<nav className="relative container mx-auto p-6">
					<div className="flex items-center justify-between">
						<div className="pt-2 text-xl  font-semibold text-brightRed">
							Path Finder
						</div>
						<div className="hidden space-x-6 md:flex">
							<Link to="/" className="hover:text-darkGrayishBlue">
								Home
							</Link>
							<Link to="/" className="hover:text-darkGrayishBlue">
								Exams
							</Link>
							<Link to="/" className="hover:text-darkGrayishBlue">
								Counselling
							</Link>
							<Link to="/" className="hover:text-darkGrayishBlue">
								Careers
							</Link>
							<Link to="/" className="hover:text-darkGrayishBlue">
								About Us
							</Link>
						</div>

						<div className="flex justify-center md:justify-start">
							<Link
								to="/signup"
								class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
								Sign Up
							</Link>
						</div>

						<button
							id="menu-btn"
							className="block hamburger md:hidden focus:outline-none">
							<span className="hamburger-top"/>
							<span className="hamburger-middle"/>
							<span className="hamburger-bottom"/>
						</button>
					</div>

					<div className="md:hidden">
						<div
							id="menu"
							className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
							<a href="#">Pricing</a>
							<a href="#">Product</a>
							<a href="#">About Us</a>
							<a href="#">Careers</a>
							<a href="#">Community</a>
						</div>
					</div>
				</nav>
				<Switch>
					<Route path="/tree">
						<About/>
					</Route>
					<Route path="/signup">
						<Signup/>
					</Route>
					<Route path="/">
						<Home/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function About() {
	const state = useSelector(state => state);
	return (
		<>
			<div id="container">
				<Header filter={state.filter} timestamp={json.timestamp}/>
				<TreeContainer
					activeNode={state.activeNode}
					data={json}
					filter={state.filter}
					height={state.height}
					width={state.width}/>
			</div>
		</>
	);
}

ReactDom.render(
	<Provider store={Store}>
		<Router>
			<Switch>
				<Route exect path="/tree">
					<TreeList/>
				</Route>
				<Route exect path="/">
					<App/>
				</Route>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('app')
);