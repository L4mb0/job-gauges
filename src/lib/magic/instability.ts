import * as a1lib from 'alt1';
import { Overlay } from '../../types';
import { adjustPositionForScale, forceClearOverlay, handleResizingImages, white } from '../utility';
import { clearAbilityOverlays, handleAbilityActiveState } from '../util/ability-helpers';

const ultimateImages = a1lib.webpackImages({
	active: require('../../asset/gauge-ui/magic/instability/active.data.png'),
	inactive: require('../../asset/gauge-ui/magic/instability/inactive.data.png'),
});

let lastValue: number;
let scaledOnce = false;

export async function fsoaOverlay(gauges: Overlay) {
	const { magic } = gauges;
	const { instability } = magic;
	const { active_orientation } = instability.position;

	if (!instability.isActiveOverlay) {
		clearAbilityOverlays('Instability');
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
		ability: instability,
		position: magic.position,
	};

	// If Instability is not Active and is not on cooldown it should appear as able to be activated
	if (!instability.active) {
		handleAbilityActiveState(abilityData, 'Instability', !instability.isOnCooldown);
		
		alt1.overLayRefreshGroup('Instability_Text');
		alt1.overLayClearGroup('Instability_Text');
		
		return lastValue = instability.time;
	} 
	
	instability.isOnCooldown = false;
	forceClearOverlay('Instability_Cooldown_Text');
	
	handleAbilityActiveState(abilityData, 'Instability', true);
	
	if (lastValue !== instability.time) {
		instability.cooldownDuration = 0;
		forceClearOverlay('Instability_Cooldown_Text');
		alt1.overLaySetGroup('Instability_Text');
		alt1.overLayFreezeGroup('Instability_Text');
		alt1.overLayClearGroup('Instability_Text');
		alt1.overLayTextEx(
			`${instability.time || ''}`,
			white,
			14,
			adjustPositionForScale(magic.position.x + active_orientation.x + 26, gauges.scaleFactor),
			adjustPositionForScale(magic.position.y + active_orientation.y + 30, gauges.scaleFactor),
			3000,
			'',
			true,
			true
		);
		alt1.overLayRefreshGroup('Instability_Text');
	}
	
	lastValue = instability.time;
}
