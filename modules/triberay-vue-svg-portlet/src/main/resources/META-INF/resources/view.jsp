<%@ include file="/init.jsp" %>

<!-- demo root element -->
<div id="<portlet:namespace />-1"></div>

<p style="font-size:12px">* input[type="range"] requires IE10 or above.</p>

<aui:script require="<%= mainRequire %>">

	// The raw data to observe
	var stats = [
	{ label: 'A', value: 100 },
	{ label: 'B', value: 100 },
	{ label: 'C', value: 100 },
	{ label: 'D', value: 100 },
	{ label: 'E', value: 100 },
	{ label: 'F', value: 100 }
	];

	main.default('<portlet:namespace />', stats);
</aui:script>
