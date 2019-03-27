package com.triberay.vue.instagram.config;

import aQute.bnd.annotation.metatype.Meta;
import com.triberay.vue.instagram.constants.InstagramKeys;

/**
 * @author Triberay
 * @author Wouter Vernaillen
 */
@Meta.OCD(
	id = InstagramKeys.INSTAGRAM_CONFIGURATION_ID
)
public interface InstagramConfiguration {

	@Meta.AD(required = false, deflt = "11085243931.be0cab3.7c1308b479ee488482f740ffc90f3cdd")
	public String accessToken();
}
