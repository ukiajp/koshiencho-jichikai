module.exports = function(eleventyConfig) {

  // コレクション（新着順）
  eleventyConfig.addCollection("news", function(api) {
    return api.getFilteredByGlob("src/content/news/*.md")
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("activities", function(api) {
    return api.getFilteredByGlob("src/content/activities/*.md")
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("events", function(api) {
    return api.getFilteredByGlob("src/content/events/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // お知らせ＋活動報告を合わせた最新情報（イベントは除外）
  eleventyConfig.addCollection("updates", function(api) {
    const news = api.getFilteredByGlob("src/content/news/*.md");
    const activities = api.getFilteredByGlob("src/content/activities/*.md");
    return [...news, ...activities].sort((a, b) => b.date - a.date);
  });

  // 先頭N件を取得
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  // 日付フォーマット（YYYY/MM/DD）
  eleventyConfig.addFilter("dateJp", function(date) {
    const d = new Date(date);
    return `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}`;
  });

  // 日付フォーマット（YYYY-MM-DD）カレンダーJS用
  eleventyConfig.addFilter("isoDate", function(date) {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  });

  // 静的ファイルをそのままコピー
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");

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
