module.exports = function(eleventyConfig) {

  // コレクション（新着順）
  eleventyConfig.addCollection("news", function(api) {
    return api.getFilteredByGlob("content/news/*.md")
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("activities", function(api) {
    return api.getFilteredByGlob("content/activities/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // 日付フォーマット（YYYY/MM/DD）
  eleventyConfig.addFilter("dateJp", function(date) {
    const d = new Date(date);
    return `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}`;
  });

  // 静的ファイルをそのままコピー
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "content": "content" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
  };
};
