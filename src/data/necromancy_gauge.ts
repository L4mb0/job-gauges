import { NecromancyGauge } from "../types";

export const necromancy_gauge: NecromancyGauge = {
	isInCombat: false,
	position: {
		x: 50,
		y: 50,
	},
	stacks: {
		souls: {
			isActiveOverlay: true,
			active: true,
			stacks: 0,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped: {
					x: -10,
					y: 50,
				},
				split: {
					x: -10,
					y: 50,
				},
				reverse_split: {
					x: -10,
					y: 50,
				},
			},
			alarm: {
				isActive: false,
				isLooping: false,
				volume: 100,
				sound: './resource/alarms/alarm2.wav',
				threshold: 5,
			},
		},
		necrosis: {
			isActiveOverlay: true,
			active: true,
			stacks: 0,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped: {
					x: -10,
					y: 98,
				},
				split: {
					x: -10,
					y: 98,
				},
				reverse_split: {
					x: -10,
					y: 98,
				},
			},
			alarm: {
				isActive: false,
				isLooping: false,
				volume: 100,
				sound: './resource/alarms/alarm2.wav',
				threshold: 12,
			},
		},
		duplicateNecrosisRow: false,
		useColoredNecrosis: false,
	},
	conjures: {
		active: false,
		isActiveOverlay: true,
		position: {
			active_orientation: {
				x: 0,
				y: 0,
			},
			grouped: {
				x: -12,
				y: 5,
			},
			split: {
				x: 15,
				y: 5,
			},
			reverse_split: {
				x: -12,
				y: 5,
			},
		},
		skeleton: {
			isActiveOverlay: true,
			time: 0,
			active: false,
		},
		zombie: {
			isActiveOverlay: true,
			time: 0,
			active: false,
		},
		ghost: {
			isActiveOverlay: true,
			time: 0,
			active: false,
		},
		fourth: {
			isActiveOverlay: true,
			time: 0,
			active: false,
		},
	},
	incantations: {
		active: [false, false, true, true],
		isActiveOverlay: true,
		invokeDeath: {
			isActiveOverlay: true,
			time: 0,
			active: false,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped: {
					x: 72,
					y: 5,
				},
				split: {
					x: -9,
					y: 0,
				},
				reverse_split: {
					x: 29,
					y: 0,
				},
			},
		},
		darkness: {
			isActiveOverlay: true,
			time: 0,
			active: false,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped: {
					x: 72,
					y: 24,
				},
				split: {
					x: -9,
					y: 24,
				},
				reverse_split: {
					x: 29,
					y: 24,
				},
			},
		},
		splitSoul: {
			isActiveOverlay: true,
			active: false,
			time: 0,
			isOnCooldown: false,
			cooldownDuration: 41,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped: {
					x: 50,
					y: 24,
				},
				split: {
					x: 49,
					y: 24,
				},
				reverse_split: {
					x: 28,
					y: 24,
				},
			},
		},
		threads: {
			isActiveOverlay: true,
			active: false,
			time: 0,
			isOnCooldown: false,
			cooldownDuration: 40,
			position: {
				active_orientation: {
					x: 0,
					y: 0,
				},
				grouped: {
					x: 50,
					y: 0,
				},
				split: {
					x: 49,
					y: 0,
				},
				reverse_split: {
					x: 28,
					y: 0,
				},
			},
		},
	},
	livingDeath: {
		isActiveOverlay: true,
		active: false,
		time: 0,
		isOnCooldown: false,
		cooldownDuration: 60,
		position: {
			active_orientation: {
				x: 0,
				y: 0,
			},
			grouped: {
				x: 30,
				y: 5,
			},
			split: {
				x: 60,
				y: 5,
			},
			reverse_split: {
				x: 81,
				y: 5,
			},
		},
	},
	bloat: {
		isActiveOverlay: true,
		active: false,
		time: 0,
		position: {
			active_orientation: {
				x: 0,
				y: 0,
			},
			grouped: {
				x: -10,
				y: 74,
			},
			split: {
				x: -10,
				y: 74,
			},
			reverse_split: {
				x: -10,
				y: 74,
			},
		},
	},
};