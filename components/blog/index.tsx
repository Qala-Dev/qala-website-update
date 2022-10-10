import BlogPost from "./blogpost";

interface Blog {
  lg_image: string;
  s_image: string;
  author: string;
  date: string;
  topic: string;
  description: string;
  views: string;
  tag: string;
}

const Blogs: Blog[] = [
  {
    lg_image: "./blog_1.png",
    s_image: "./blog_m_1.png",
    author: "Bamidele Oluwatobi",
    date: "16/8/2022",
    topic: "Discussion Questions for Mastering Bitcoin",
    description:
      "Mastering Bitcoin is a book for developers, although the first two chapters cover bitcoin",
    views: "12,345",
    tag: "Bitcoin",
  },
  {
    lg_image: "./blog_2.png",
    s_image: "./blog_m_2.png",
    author: "Bamidele Oluwatobi",
    date: "16/8/2022",
    topic: "Discussion Questions for Mastering the Lightning Network",
    description:
      "Mastering the Lightning Network is a book for developers, although the first five chapters",
    views: "12,345",
    tag: "Lightning",
  },
];
export default function Blog() {
  return (
    <div className="flex flex-col">
      <h3 className=" font-bold text-lg lg:text-2xl text-blue mb-6 text-center lg:text-left mt-10 lg:mt-0">
        Top Stories
      </h3>
      <div>
        {Blogs.map((blog, index) => (
          <BlogPost
            lg_image={blog.lg_image}
            s_image={blog.s_image}
            author={blog.author}
            date={blog.date}
            topic={blog.topic}
            description={blog.description}
            views={blog.views}
            tag={blog.tag}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
