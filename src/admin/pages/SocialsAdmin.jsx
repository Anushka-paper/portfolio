import CrudSection from "#admin/CrudSection.jsx";

const SocialsAdmin = () => (
  <CrudSection
    title="Socials"
    apiPath="/api/socials"
    emptyItem={{ text: "", icon: "", bg: "#000000", link: "" }}
    summarize={(item) => item.text}
    fields={[
      { name: "text", label: "Name", type: "text" },
      { name: "icon", label: "Icon", type: "image" },
      { name: "bg", label: "Background color (hex)", type: "text" },
      { name: "link", label: "Link", type: "text" },
    ]}
  />
);

export default SocialsAdmin;
