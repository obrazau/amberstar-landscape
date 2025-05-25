module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addCollection("services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/services/*.md");
  });
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
