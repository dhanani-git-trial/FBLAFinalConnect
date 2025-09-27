export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27')
];

export const server_loads = [0];

export const dictionary = {
		"/": [2],
		"/account": [~3],
		"/create": [4],
		"/create/class": [~5],
		"/create/levels": [~6],
		"/create/levels/level1": [~7],
		"/create/main": [~8],
		"/create/my_quests": [~9],
		"/create/navigate": [~10],
		"/create/quest_storage": [~11],
		"/create/question10": [~13],
		"/create/question1": [~12],
		"/create/question2": [~14],
		"/create/question3": [~15],
		"/create/question4": [~16],
		"/create/question5": [~17],
		"/create/question6": [~18],
		"/create/question7": [~19],
		"/create/question8": [~20],
		"/create/question9": [~21],
		"/create/submit": [~22],
		"/dashboard": [~23],
		"/loading/registrationsuccessful": [24],
		"/login": [~25],
		"/logout": [~26],
		"/register": [~27]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';