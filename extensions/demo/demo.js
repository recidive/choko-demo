var demo = module.exports;

/**
 * The navigation() hook.
 */
demo.navigation = function(navigations, callback) {

  // Add main navigation items for the demo pages.
  navigations['main'].items.push({
    title: 'A Page',
    url: '/a-page'
  });

  navigations['main'].items.push({
    title: 'Another Page',
    url: '/a-page-callback'
  });

  callback();
};

/**
 * The page() hook.
 */
demo.page = function(pages, callback) {
  var newPages = {};

  newPages['a-page'] = {
    path: '/a-page',
    title: 'Hello world',
    description: 'A simple page with monolithic content.',
    access: 'access application',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac vehicula lacus. Nullam facilisis ornare dolor eu imperdiet. Vivamus rutrum lacus non metus vestibulum placerat. Suspendisse potenti. Aliquam risus neque, elementum a nulla non, dapibus dictum orci. Etiam iaculis tincidunt diam, quis fringilla arcu tristique ultricies. Curabitur sem nisi, mollis ut purus vel, mollis molestie leo.</p>'
  };

  newPages['a-page-callback'] = {
    path: '/a-page-callback',
    title: 'Hello world from a callback',
    description: 'A simple page with dynamically generated content.',
    access: 'access application',
    callback: function(request, response, callback) {
      var paragraphs = [
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui leo, posuere sit amet mattis pretium, pellentesque vitae sapien. Proin eget metus non velit faucibus iaculis. Sed dictum condimentum scelerisque. Morbi semper posuere dolor mattis varius. Donec est tellus, adipiscing ac ornare quis, gravida id mauris. Nunc a urna id quam cursus molestie. Ut ac tellus ac eros placerat dapibus non id massa.</p>',
        '<p>Cras auctor sem id dolor fringilla, sed mattis lacus pulvinar. Proin elit nulla, tristique eget aliquet sit amet, egestas at urna. Suspendisse orci libero, lacinia fringilla tempor quis, facilisis eget diam.</p>',
        '<p>Ut ac vehicula lacus. Nullam facilisis ornare dolor eu imperdiet. Vivamus rutrum lacus non metus vestibulum placerat. Suspendisse potenti. Aliquam risus neque, elementum a nulla non, dapibus dictum orci. Etiam iaculis tincidunt diam, quis fringilla arcu tristique ultricies. Curabitur sem nisi, mollis ut purus vel, mollis molestie leo.</p>'
      ];

      var content = [];

      // Generate five random Lorem Ipsum paragraphs.
      for (var i = 1; i <= 5; i++) {
        var whatParagraph = Math.floor((Math.random() * 3));
        content.push(paragraphs[whatParagraph]);
      }

      response.payload.page.content = content.join('');

      callback();
    }
  };

  callback(null, newPages);
}

/**
 * Blocks.
 */
demo.panel= function(panels, callback) {
  var newPanels = {};

  newPanels['a-panel'] = {
    title: 'A panel',
    description: '',
    content: '<p>Panel content.</p>'
  };

  callback(null, newPanels);
};

/**
 * The context() hook.
 */
demo.context = function(contexts, callback) {
  var newContexts = {};

  newContexts['demo'] = {
    title: 'Demo',
    description: '',
    access: 'access application',
    weight: 0,
    conditions: {
      path: ['/a-page', '/a-page-callback']
    },
    reactions: {
      layout: 'two-columns-4-8',
      panel: {
        'sidebar': [{
          name: 'a-panel',
          weight: 0
        }]
      }
    }
  };

  callback(null, newContexts);
};
