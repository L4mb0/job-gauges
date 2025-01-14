import * as a1lib from 'alt1';
import { Overlay } from '../../types';
import { adjustPositionForScale, forceClearOverlay, handleResizingImages, white } from '../utility';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';

const ultimateImages = a1lib.webpackImages({
	active: require('../.././asset/gauge-ui/magic/tsunami/active.data.png'),
	inactive: require('../.././asset/gauge-ui/magic/tsunami/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function tsunamiOverlay(gauges: Overlay) {
	const { magic } = gauges;
	const { tsunami } = magic;
	const { active_orientation } = tsunami.position;

	if (!tsunami.isActiveOverlay) {
		clearAbilityOverlays('Tsunami');
		return;
	}

	await ultimateImages.promise;

	if (!scaledOnce) {
		handleResizingImages(ultimateImages, gauges.scaleFactor);

		scaledOnce = true;
	}

	const abilityData = {
		images: ultimateImages,
		scaleFactor: gauges.scaleFactor,
		ability: tsunami,
		position: magic.position,
	};

	// If tsunami is not Active and is not on cooldown it should appear as able to be activated
	if (!tsunami.active) {
		handleAbilityActiveState(abilityData, 'Tsunami', !tsunami.isOnCooldown);
		alt1.overLayRefreshGroup('Tsunami_Text');
		alt1.overLayClearGroup('Tsunami_Text');
		
		return lastValue = tsunami.time;
	} 
	
	tsunami.isOnCooldown = false;
	forceClearOverlay('Tsunami_Cooldown_Text');

	handleAbilityActiveState(abilityData, 'Tsunami', true);
	
	if (lastValue !== tsunami.time) {
		tsunami.cooldownDuration = 0;
		forceClearOverlay('Tsunami_Cooldown_Text');
		alt1.overLaySetGroup('Tsunami_Text');
		alt1.overLayFreezeGroup('Tsunami_Text');
		alt1.overLayClearGroup('Tsunami_Text');
		alt1.overLayTextEx(
			`${tsunami.time || ''}`,
			white,
			14,
			adjustPositionForScale(magic.position.x + active_orientation.x + 26, gauges.scaleFactor),
			adjustPositionForScale(magic.position.y + active_orientation.y + 26, gauges.scaleFactor),
			3000,
			'',
			true,
			true
		);
		alt1.overLayRefreshGroup('Tsunami_Text');
	}
		
	lastValue = tsunami.time;
}
