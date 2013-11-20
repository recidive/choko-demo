var blog = module.exports = {};

/**
 * The navigation() hook.
 */
blog.navigation = function(navigations, callback) {

  // Add main navigation item for the demo pages.
  navigations['main'].items.push({
    title: 'Blog',
    url: '/blog'
  });

  callback();
};
