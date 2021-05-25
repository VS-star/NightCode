const BLOG_RANGE = {
  START: 1,
  END: 50
}
let blogs = [];
for (let index = BLOG_RANGE.START; index < BLOG_RANGE.END; index++) {
  blogs[index] = `blog-${index}`;
}

export { BLOG_RANGE, blogs };