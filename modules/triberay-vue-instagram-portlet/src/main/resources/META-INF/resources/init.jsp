<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %><%@
taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %><%@
taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %><%@
taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>

<%@ page import="com.triberay.vue.instagram.config.InstagramConfiguration" %><%@
        page import="com.liferay.portal.kernel.util.StringPool" %><%@
        page import="com.liferay.portal.kernel.util.Validator" %>

<liferay-theme:defineObjects />

<portlet:defineObjects />

<%
String mainRequire = (String)renderRequest.getAttribute("mainRequire");
%>

<%
    InstagramConfiguration instagramConfiguration =
            (InstagramConfiguration) renderRequest.getAttribute(InstagramConfiguration.class.getName());

    String accessToken = StringPool.BLANK;

    if (Validator.isNotNull(instagramConfiguration)) {
        accessToken = portletPreferences.getValue("accessToken", instagramConfiguration.accessToken());
    }
%>
