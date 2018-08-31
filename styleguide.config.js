module.exports = {
  components: "src/ui/**/[A-Z]*.jsx",
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href:
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        }
      ]
    }
  }
};
