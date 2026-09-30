import CrudSection from "#admin/CrudSection.jsx";

const TechStackAdmin = () => (
  <CrudSection
    title="Tech Stack"
    apiPath="/api/tech-stack"
    emptyItem={{ category: "", items: [] }}
    summarize={(item) => `${item.category} — ${(item.items || []).join(", ")}`}
    fields={[
      { name: "category", label: "Category", type: "text" },
      { name: "items", label: "Items (comma separated)", type: "list" },
    ]}
  />
);

export default TechStackAdmin;
