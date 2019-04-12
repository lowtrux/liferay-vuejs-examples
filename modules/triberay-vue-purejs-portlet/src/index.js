
import Vue from 'vue/dist/vue.common';
//import App from './App';

/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function index({portletNamespace, contextPath, portletElementId}) {

    const node = document.getElementById(portletElementId);

    // Dynamically write markup to portlet's node
    node.innerHTML = `
        <div>
            <div>
                <span class="tag">${Liferay.Language.get('porlet-namespace')}:</span>
                <span class="value">{{portletNamespace}}</span>
            </div>
            <div>
                <span class="tag">${Liferay.Language.get('context-path')}:</span>
                <span class="value">{{contextPath}}</span>
            </div>
            <div>
                <span class="tag">${Liferay.Language.get('portlet-element-id')}:</span>
                <span class="value">{{portletElementId}}</span>
            </div>

        </div>
    `;

    //
    // Use runtime + compiler module in this case so that we don't need to
    // process templates during build time.
    //
    // See https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // for more information.
    //
    new Vue({
		el: `#${portletElementId}`,
		data: {
			portletNamespace, contextPath, portletElementId
		}
	});


	// The raw data to observe
	/*_var stats = [
		{ label: 'A', value: 100 },
		{ label: 'B', value: 100 },
		{ label: 'C', value: 100 },
		{ label: 'D', value: 100 },
		{ label: 'E', value: 100 },
		{ label: 'F', value: 100 }
	];

	new Vue({
		el: `#${portletNamespace}-1`,
		data: {
			stats, portletNamespace, contextPath, portletElementId
		},
		render: h => h(App)
	});*/

}
