package com.triberay.vue.instagram.config;

import aQute.bnd.annotation.metatype.Meta;
import com.triberay.vue.instagram.constants.InstagramKeys;

/**
 * @author Triberay
 */
@Meta.OCD(
	id = InstagramKeys.InstagramConfigurationId
)
public interface InstagramConfiguration {

	@Meta.AD(required = false, deflt = "")
	public String accessToken();
}
