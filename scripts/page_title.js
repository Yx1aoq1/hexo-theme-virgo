/**
 * Page Title Helper
 * @description Generate page title.
 * @example
 *     <%- page_title() %>
 */
hexo.extend.helper.register('page_title', function () {
  var title = this.page.title ? this.page.title : this.config.title;

  if (this.is_archive()) {
    title = this.__('menu.articles');

    if (this.is_month()) {
      title += ': ' + this.page.year + '/' + this.page.month;
    } else if (this.is_year()) {
      title += ': ' + this.page.year;
    }
  } else if (this.is_category()) {
    title = this.__('menu.category') + ': ' + this.page.category;
  } else if (this.is_tag()) {
    title = this.__('menu.tag') + ': ' + this.page.tag;
  }

  return title;
})