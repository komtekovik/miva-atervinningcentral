export type CategoryData = {
	id: string;
	title: string;
	description: string;
	note?: string;
	color: string;
};

export type TrashItem = {
	name: string;
	targetId: string;
	icon: string;
	category: string;
};

export type MapItem = {
	id: string;
	component: any;
	x: number;
	y: number;
	w: number;
	h: number;
};

export type MapData = {
	id: string;
	name: string;
	width: number;
	height: number;
	items: MapItem[];
};

export type Point = {
	x: number;
	y: number;
};