import CrudSection from "#admin/CrudSection.jsx";

const BlogAdmin = () => (
  <CrudSection
    title="Blog Posts"
    apiPath="/api/blog-posts"
    emptyItem={{ date: "", title: "", image: "", link: "" }}
    summarize={(item) => item.title}
    fields={[
      { name: "date", label: "Date / source", type: "text" },
      { name: "title", label: "Title", type: "text" },
      { name: "image", label: "Image", type: "image" },
      { name: "link", label: "Link", type: "text" },
    ]}
  />
);

export default BlogAdmin;
