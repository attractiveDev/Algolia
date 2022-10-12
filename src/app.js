/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'RentEvent_items',
  searchClient: algoliasearch('YFKIU3UQA6', 'fe56e54603ae65df8c74890568ffdf70'),
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  
  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'Title',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <a href="{{link}}">
          <div>
            <img src="{{imageLink}}" align="left" alt="{{Title}}" />
            <div class="hit-name">
              {{#helpers.highlight}}{ "attribute": "Title" }{{/helpers.highlight}}
            </div>
            <div class="hit-description">
              {{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}
            </div>
            <div class="hit-price">\${{price}}</div>
          </div>
        </a>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
