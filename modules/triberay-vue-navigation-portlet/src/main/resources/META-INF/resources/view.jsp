<%@ include file="/init.jsp" %>

<liferay-util:html-top>
	<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" data-senna-track="permanent">
	<link href="https://cdn.jsdelivr.net/npm/vuetify@1.5.7/dist/vuetify.min.css" rel="stylesheet" type="text/css" data-senna-track="permanent"/>
</liferay-util:html-top>

<div id="<portlet:namespace />-1"></div>

<aui:script require="<%= mainRequire %>">
	main.default(
	    '<portlet:namespace />',
		'<%= siteLayouts %>',
		'<%= siteUrl %>',
		'<%= currentLayoutId %>',
		'<%= parentLayoutId %>'
	);
</aui:script>
