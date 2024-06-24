import * as a1lib from 'alt1';

var necrosisImages = a1lib.webpackImages({
	necrosis_0: require('../.././asset/data/necrosis/necrosis_0.data.png'),
	necrosis_2: require('../.././asset/data/necrosis/necrosis_2.data.png'),
	necrosis_4: require('../.././asset/data/necrosis/necrosis_4.data.png'),
	necrosis_6: require('../.././asset/data/necrosis/necrosis_6.data.png'),
	necrosis_8: require('../.././asset/data/necrosis/necrosis_8.data.png'),
	necrosis_10: require('../.././asset/data/necrosis/necrosis_10.data.png'),
	necrosis_12: require('../.././asset/data/necrosis/necrosis_12.data.png'),
});

export async function necrosisOverlay(gauges) {
	await necrosisImages.promise;
	switch (gauges.necromancy.stacks.necrosis.count) {
		case 0:
			alt1.overLaySetGroup('Necrosis');
			alt1.overLayImage(
				gauges.necromancy.position.x - 10,
				gauges.necromancy.position.y + 72,
				a1lib.encodeImageString(necrosisImages.necrosis_0.toDrawableData()),
				necrosisImages.necrosis_0.width,
				1000
			);
			if (gauges.necromancy.stacks.necrosis.dupeRow) {
				alt1.overLaySetGroup('Necrosis_Row2');
				alt1.overLayImage(
					gauges.necromancy.position.x - 10,
					gauges.necromancy.position.y + 86,
					a1lib.encodeImageString(
						necrosisImages.necrosis_0.toDrawableData()
					),
					necrosisImages.necrosis_0.width,
					1000
				);
			}
			break;
		case 2:
			alt1.overLaySetGroup('Necrosis');
			alt1.overLayImage(
				gauges.necromancy.position.x - 10,
				gauges.necromancy.position.y + 72,
				a1lib.encodeImageString(
					necrosisImages.necrosis_2.toDrawableData()
				),
				necrosisImages.necrosis_2.width,
				1000
			);
			if (gauges.necromancy.stacks.necrosis.dupeRow) {
				alt1.overLaySetGroup('Necrosis_Row2');
				alt1.overLayImage(
					gauges.necromancy.position.x - 10,
					gauges.necromancy.position.y + 86,
					a1lib.encodeImageString(
						necrosisImages.necrosis_2.toDrawableData()
					),
					necrosisImages.necrosis_2.width,
					1000
				);
			}
			break;
		case 4:
			alt1.overLaySetGroup('Necrosis');
			alt1.overLayImage(
				gauges.necromancy.position.x - 10,
				gauges.necromancy.position.y + 72,
				a1lib.encodeImageString(
					necrosisImages.necrosis_4.toDrawableData()
				),
				necrosisImages.necrosis_4.width,
				1000
			);
			if (gauges.necromancy.stacks.necrosis.dupeRow) {
				alt1.overLaySetGroup('Necrosis_Row2');
				alt1.overLayImage(
					gauges.necromancy.position.x - 10,
					gauges.necromancy.position.y + 86,
					a1lib.encodeImageString(
						necrosisImages.necrosis_4.toDrawableData()
					),
					necrosisImages.necrosis_4.width,
					1000
				);
			}
			break;
		case 6:
			alt1.overLaySetGroup('Necrosis');
			alt1.overLayImage(
				gauges.necromancy.position.x - 10,
				gauges.necromancy.position.y + 72,
				a1lib.encodeImageString(
					necrosisImages.necrosis_6.toDrawableData()
				),
				necrosisImages.necrosis_6.width,
				1000
			);
			if (gauges.necromancy.stacks.necrosis.dupeRow) {
				alt1.overLaySetGroup('Necrosis_Row2');
				alt1.overLayImage(
					gauges.necromancy.position.x - 10,
					gauges.necromancy.position.y + 86,
					a1lib.encodeImageString(
						necrosisImages.necrosis_6.toDrawableData()
					),
					necrosisImages.necrosis_6.width,
					1000
				);
			}
			break;
		case 8:
			alt1.overLaySetGroup('Necrosis');
			alt1.overLayImage(
				gauges.necromancy.position.x - 10,
				gauges.necromancy.position.y + 72,
				a1lib.encodeImageString(necrosisImages.necrosis_8.toDrawableData()),
				necrosisImages.necrosis_8.width,
				1000
			);
			if (gauges.necromancy.stacks.necrosis.dupeRow) {
				alt1.overLaySetGroup('Necrosis_Row2');
				alt1.overLayImage(
					gauges.necromancy.position.x - 10,
					gauges.necromancy.position.y + 86,
					a1lib.encodeImageString(
						necrosisImages.necrosis_8.toDrawableData()
					),
					necrosisImages.necrosis_8.width,
					1000
				);
			}
			break;
		case 10:
			alt1.overLaySetGroup('Necrosis');
			alt1.overLayImage(
				gauges.necromancy.position.x - 10,
				gauges.necromancy.position.y + 72,
				a1lib.encodeImageString(
					necrosisImages.necrosis_10.toDrawableData()
				),
				necrosisImages.necrosis_10.width,
				1000
			);
			if (gauges.necromancy.stacks.necrosis.dupeRow) {
				alt1.overLaySetGroup('Necrosis_Row2');
				alt1.overLayImage(
					gauges.necromancy.position.x - 10,
					gauges.necromancy.position.y + 86,
					a1lib.encodeImageString(
						necrosisImages.necrosis_10.toDrawableData()
					),
					necrosisImages.necrosis_10.width,
					1000
				);
			}
			break;
		case 12:
			alt1.overLaySetGroup('Necrosis');
			alt1.overLayImage(
				gauges.necromancy.position.x - 10,
				gauges.necromancy.position.y + 72,
				a1lib.encodeImageString(
					necrosisImages.necrosis_12.toDrawableData()
				),
				necrosisImages.necrosis_12.width,
				1000
			);
			if (gauges.necromancy.stacks.necrosis.dupeRow) {
				alt1.overLaySetGroup('Necrosis_Row2');
				alt1.overLayImage(
					gauges.necromancy.position.x - 10,
					gauges.necromancy.position.y + 86,
					a1lib.encodeImageString(
						necrosisImages.necrosis_12.toDrawableData()
					),
					necrosisImages.necrosis_12.width,
					1000
				);
			}
			break;
	}
}