export type TrashItem = {
	name: string;
	targetId: string;
	icon: string;
	category: string;
};

export type MapIcon = {
	id: string;
	component: any;
	x: number;
	y: number;
	w: number;
	h: number;
};

export type Point = {
	x: number;
	y: number;
};