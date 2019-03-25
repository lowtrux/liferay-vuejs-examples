package com.triberay.vue.navigation.portlet.portlet;

import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.model.Layout;
import com.liferay.portal.kernel.service.LayoutLocalService;
import com.liferay.portal.kernel.util.PortalUtil;
import com.triberay.vue.navigation.portlet.constants.TriberayVueNavigationPortletKeys;

import com.liferay.frontend.js.loader.modules.extender.npm.NPMResolver;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

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
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + TriberayVueNavigationPortletKeys.TriberayVueNavigation,
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class TriberayVueNavigationPortlet extends MVCPortlet {

	@Reference
	private LayoutLocalService layoutLocalService;

	@Override
	public void doView(
			RenderRequest renderRequest, RenderResponse renderResponse)
		throws IOException, PortletException {

		try {
			long groupId = PortalUtil.getScopeGroupId(renderRequest);
			Locale locale = renderRequest.getLocale();

			List<Layout> layouts = layoutLocalService.getLayouts(groupId, false);
			JSONArray layoutJSONArray = JSONFactoryUtil.createJSONArray();

			layouts.stream().forEach(layout -> addLayout(layout, layoutJSONArray, locale));
			renderRequest.setAttribute("siteLayouts", layoutJSONArray.toString());

		} catch (PortalException e) {
			e.printStackTrace();
		}

		renderRequest.setAttribute(
			"mainRequire",
			_npmResolver.resolveModuleName("triberay-vue-navigation-portlet") + " as main");

		super.doView(renderRequest, renderResponse);
	}

	private void addLayout(Layout layout, JSONArray layoutJSONArray, Locale locale) {
		JSONObject jsonObject = JSONFactoryUtil.createJSONObject();
		jsonObject.put("title", layout.getHTMLTitle(locale));
		jsonObject.put("link", layout.getFriendlyURL(locale));
		jsonObject.put("layoutId", layout.getLayoutId());
		jsonObject.put("parentLayoutId", layout.getParentLayoutId());
		jsonObject.put("icon", "dashboard");
		layoutJSONArray.put(jsonObject);
	}

	@Reference
	private NPMResolver _npmResolver;

}
