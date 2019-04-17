<%@ include file="/init.jsp" %>

<div id="<portlet:namespace />-1" style="min-height: 600px"></div>

<aui:script require="<%= mainRequire %>">
	main.default('<portlet:namespace />');
</aui:script>
