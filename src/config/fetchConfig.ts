const fetchConfig = {
  course: {
    baseUrl:
      process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "",
  },
};

export default fetchConfig;
