import * as a1lib from 'alt1';
import * as BuffReader from 'alt1/buffs';
import { Overlay } from '../../types';
import { adjustPositionForScale, white } from '../utility';

const quiverImages = a1lib.webpackImages({
	bik: require('../../asset/data/buffs/ranged/ammo/bik.data.png'),
	ful: require('../../asset/data/buffs/ranged/ammo/ful.data.png'),
	jas_dragonbane: require('../../asset/data/buffs/ranged/ammo/jas-dragonbane.data.png'),
	wen: require('../../asset/data/buffs/ranged/ammo/wen.data.png'),
	blackstone: require('../../asset/data/buffs/ranged/ammo/blackstone.data.png'),
	deathspore: require('../../asset/data/buffs/ranged/ammo/deathspores.data.png'),
	diamond_bak: require('../../asset/data/buffs/ranged/ammo/diamond-bak.data.png'),
	hydrix_bak: require('../../asset/data/buffs/ranged/ammo/hydrix-bak.data.png'),
	ruby_bak: require('../../asset/data/buffs/ranged/ammo/ruby-bak.data.png'),
	onyx_bak: require('../../asset/data/buffs/ranged/ammo/onyx-bak.data.png'),
});

let lastAmmo: string;

export async function findAmmo(gauges: Overlay, buffs: BuffReader.Buff[] | null) {
	if (!buffs) {
		return;
	}

	let ammoActive = 0;
	let currentAmmo = '';

	for (let [_key, value] of Object.entries(buffs)) {
		const checkBik = value.countMatch(quiverImages.bik, false);
		const checkFul = value.countMatch(quiverImages.ful, false);
		const checkWen = value.countMatch(quiverImages.wen, false);
		const checkJas = value.countMatch(quiverImages.jas_dragonbane, false);
		const checkBlackstone = value.countMatch(quiverImages.blackstone, false);
		const checkDeathspores = value.countMatch(quiverImages.deathspore, false);
		const checkDiamond = value.countMatch(quiverImages.diamond_bak, false);
		const checkHydrix = value.countMatch(quiverImages.hydrix_bak, false);
		const checkRuby = value.countMatch(quiverImages.ruby_bak, false);
		const checkOnyx = value.countMatch(quiverImages.onyx_bak, false);

		if (checkBik.failed == 0 || checkBik.passed > 28) {
			currentAmmo = 'BIK';
			ammoActive++;
		}
		if (checkFul.failed == 0 || checkFul.passed > 28) {
			currentAmmo = 'FUL';
			ammoActive++;
		}
		if (checkWen.failed == 0 || checkWen.passed > 28) {
			currentAmmo = 'WEN';
			ammoActive++;
		}
		if (checkJas.failed == 0 || checkJas.passed > 28) {
			currentAmmo = 'JAS';
			ammoActive++;
		}
		if (checkBlackstone.failed == 0 || checkBlackstone.passed > 28) {
			currentAmmo = 'BSD';
			ammoActive++;
		}
		if (checkDeathspores.failed == 0 || checkDeathspores.passed > 28) {
			currentAmmo = 'DSP';
			ammoActive++;
		}
		if (checkDiamond.failed == 0 || checkDiamond.passed > 180) {
			currentAmmo = 'BAK (D)';
			ammoActive++;
		}
		if (checkHydrix.failed == 0 || checkHydrix.passed > 180) {
			currentAmmo = 'BAK (H)';
			ammoActive++;
		}
		if (checkRuby.failed == 0 || checkRuby.passed > 180) {
			currentAmmo = 'BAK (R)';
			ammoActive++;
		}
		if (checkOnyx.failed == 0 || checkOnyx.passed > 180) {
			currentAmmo = 'BAK (O)';
			ammoActive++;
		}
	}

	if (ammoActive === 0) {
		gauges.ranged.ammo.activeAmmo = '';
	} else {
		gauges.ranged.ammo.activeAmmo = currentAmmo;
		if (lastAmmo !== currentAmmo) {
			lastAmmo = currentAmmo;
		}
	}
	displayAmmoName(gauges, currentAmmo);
}

function displayAmmoName(gauges: Overlay, ammo: string): void {
	alt1.overLaySetGroup(`Ammo_Text`);
	alt1.overLayFreezeGroup(`Ammo_Text`);
	alt1.overLayClearGroup(`Ammo_Text`);
	alt1.overLayTextEx(
		gauges.ranged.ammo.activeAmmo,
		white,
		14,
		adjustPositionForScale(gauges.ranged.position.x + 96, gauges.scaleFactor),
		adjustPositionForScale(gauges.ranged.position.y + 24, gauges.scaleFactor),
		3000,
		'',
		true,
		true
	);
	alt1.overLayRefreshGroup('Ammo_Text');
}
