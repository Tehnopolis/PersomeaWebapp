interface Configuration {
	title: string;
	icon?:
		| 'happy-face'
		| 'star'
		| 'coins'
		| 'number-one'
		| 'number-two'
		| 'number-three'
		| 'lock'
		| 'heart';
	mode?: string;
	description: string;
}

export type { Configuration };

import Panel from './Panel.vue';

export { Panel };
