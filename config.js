var config = {

	// Your site title (format: page_title - site_title)
	site_title: 'Labor Sync Support',

	// The base URL of your site (can use %base_url% in Markdown files)
	base_url: 'support.laborsync.com',

	// Used for the "Get in touch" page footer link
	support_email: 'support@laborsync.com',

	// Footer copyright content
	copyright: 'Copyright &copy; '+ new Date().getFullYear() +' - <a href="http://www.laborsync.com">Labor Sync, LLC</a>',
	// Excerpt length (used in search)
	excerpt_length: 400,

	// The meta value by which to sort pages (value should be an integer)
	// If this option is blank pages will be sorted alphabetically
	page_sort_meta: 'sort',

	// Should categories be sorted numerically (true) or alphabetically (false)
	// If true category folders need to contain a "sort" file with an integer value
	category_sort: true,

	// The base URL of your images folder (can use %image_url% in Markdown files)
	image_url: '/images',

	// Specify the path of your content folder where all your '.md' files are located
	content_dir: './content/',

	// Add your analytics tracking code (including script tags)
	analytics: "<script>window.intercomSettings = { app_id: 'qz8lpmbr' };</script><script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==='function'){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/qz8lpmbr';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>"

};

module.exports = config;
