package com.triberay.vue.components.portlet;

import com.triberay.vue.components.portlet.constants.VueComponentsPortletKeys;

import com.liferay.frontend.js.loader.modules.extender.npm.NPMResolver;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import java.io.IOException;

import javax.portlet.Portlet;
import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

/**
 * @author wouter
 */
@Component(
	immediate = true,
	property = {
		"com.liferay.portlet.display-category=category.triberayexamples",
		"com.liferay.portlet.instanceable=true",
		"com.liferay.portlet.header-portlet-css=/lib/index.css",
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + VueComponentsPortletKeys.TriberayVueComponents,
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class VueComponentsPortlet extends MVCPortlet {

	@Override
	public void doView(
			RenderRequest renderRequest, RenderResponse renderResponse)
		throws IOException, PortletException {

		renderRequest.setAttribute(
			"mainRequire",
			_npmResolver.resolveModuleName("triberay-vue-components-portlet") + " as main");

		super.doView(renderRequest, renderResponse);
	}

	@Reference
	private NPMResolver _npmResolver;

}
