import { PostSchema } from "./types";

const constructGridAreaTemplate = (posts: PostSchema[]) : string => {
  if (posts.length == 0) return "";
  let gridAreaTemplate = `"filter ${posts[0].slug}"`;
  let prev = posts[0].slug;
  let line = 2;
  for (let i = 1; i < posts.length; i++) {
    if (line % 2 === 0) {
      gridAreaTemplate += ` "${posts[i].slug} ${prev}"`;
    } else {
      gridAreaTemplate += ` "${prev} ${posts[i].slug}"`;
    };
    prev = posts[i].slug;
    line += 1
  }
  if (line % 2 === 0) {
    gridAreaTemplate += ` "next ${prev}"`;
  } else {
    gridAreaTemplate += ` "${prev} next"`;
  }
  return gridAreaTemplate;
}

export { constructGridAreaTemplate };