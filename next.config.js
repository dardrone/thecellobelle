// next.config.js
module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/contact": { page: "/contact" }
    };
  }
};
