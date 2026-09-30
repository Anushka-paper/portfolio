import CrudSection from "#admin/CrudSection.jsx";

const PhotosLinksAdmin = () => (
  <CrudSection
    title="Photos Sidebar Links"
    apiPath="/api/photos-links"
    emptyItem={{ icon: "", title: "" }}
    summarize={(item) => item.title}
    fields={[
      { name: "icon", label: "Icon", type: "image" },
      { name: "title", label: "Title", type: "text" },
    ]}
  />
);

export default PhotosLinksAdmin;
