<%@ include file="/init.jsp" %>

<aui:script require="<%= mainRequire %>">
	main.default(
	    'navapp',
		'<%= siteLayouts %>',
		'<%= siteUrl %>',
		'<%= currentLayoutId %>',
		'<%= parentLayoutId %>',
		'${themeDisplay.getPathThemeImages()}/clay/icons.svg',
		true
	);
</aui:script>
