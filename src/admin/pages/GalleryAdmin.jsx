import CrudSection from "#admin/CrudSection.jsx";

const GalleryAdmin = () => (
  <CrudSection
    title="Gallery"
    apiPath="/api/gallery"
    emptyItem={{ img: "" }}
    summarize={(item) => item.img}
    fields={[{ name: "img", label: "Image", type: "image" }]}
  />
);

export default GalleryAdmin;
