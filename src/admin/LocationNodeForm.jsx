import ImageInput from "#admin/ImageInput.jsx";

const TextField = ({ label, value, onChange, placeholder }) => (
  <label className="block space-y-1">
    <span className="text-xs font-medium text-gray-500">{label}</span>
    <input
      type="text"
      value={value || ""}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded px-2 py-1 text-sm"
    />
  </label>
);

const TextAreaField = ({ label, value, onChange }) => (
  <label className="block space-y-1">
    <span className="text-xs font-medium text-gray-500">{label}</span>
    <textarea
      value={(value || []).join("\n")}
      onChange={(e) => onChange(e.target.value.split("\n"))}
      rows={5}
      placeholder="One paragraph per line"
      className="w-full border rounded px-2 py-1 text-sm"
    />
  </label>
);

const SelectField = ({ label, value, onChange, options }) => (
  <label className="block space-y-1">
    <span className="text-xs font-medium text-gray-500">{label}</span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded px-2 py-1 text-sm"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </label>
);

// Renders the right-hand edit form for whichever tree node is selected —
// the visible fields depend on `kind` (folder vs file) and, for files,
// `fileType`, mirroring the shape in src/constants/index.js.
const DEFAULT_ICON_BY_FILE_TYPE = {
  txt: "/images/txt.png",
  url: "/images/safari.png",
  img: "/images/image.png",
  fig: "/images/plain.png",
  pdf: "/images/pdf.png",
};

const LocationNodeForm = ({ node, isRoot, onChange, onAddChild, onDelete, onMove }) => {
  const set = (patch) => onChange({ ...node, ...patch });

  return (
    <div className="space-y-3 border rounded p-4">
      <TextField label="Name" value={node.name} onChange={(v) => set({ name: v })} />
      <ImageInput label="Icon" value={node.icon} onChange={(v) => set({ icon: v })} />

      {node.kind === "folder" && (
        <>
          <TextField
            label="Position (CSS classes, e.g. top-10 left-5)"
            value={node.position}
            onChange={(v) => set({ position: v })}
          />
          <TextField
            label="Window position (CSS classes)"
            value={node.windowPosition}
            onChange={(v) => set({ windowPosition: v })}
          />
        </>
      )}

      {node.kind === "file" && (
        <>
          <SelectField
            label="File type"
            value={node.fileType}
            onChange={(v) =>
              set({
                fileType: v,
                // Keep the icon in sync unless it's already been customized
                // away from the default for the previous file type.
                icon:
                  !node.icon || node.icon === DEFAULT_ICON_BY_FILE_TYPE[node.fileType]
                    ? DEFAULT_ICON_BY_FILE_TYPE[v]
                    : node.icon,
              })
            }
            options={["txt", "url", "img", "fig", "pdf"]}
          />
          <TextField
            label="Position (CSS classes)"
            value={node.position}
            onChange={(v) => set({ position: v })}
          />

          {(node.fileType === "url" || node.fileType === "fig" || node.fileType === "pdf") && (
            <TextField label="Link (href)" value={node.href} onChange={(v) => set({ href: v })} />
          )}

          {node.fileType === "img" && (
            <ImageInput
              label="Image"
              value={node.imageUrl}
              onChange={(v) => set({ imageUrl: v })}
            />
          )}

          {node.fileType === "txt" && (
            <>
              <TextField
                label="Subtitle"
                value={node.subtitle}
                onChange={(v) => set({ subtitle: v })}
              />
              <ImageInput label="Image" value={node.image} onChange={(v) => set({ image: v })} />
              <TextAreaField
                label="Description paragraphs"
                value={node.description}
                onChange={(v) => set({ description: v })}
              />
            </>
          )}
        </>
      )}

      <div className="flex flex-wrap gap-2 pt-2 border-t">
        {node.kind === "folder" && (
          <>
            <button
              type="button"
              onClick={() => onAddChild("folder")}
              className="text-sm text-blue-600 hover:underline"
            >
              + Add subfolder
            </button>
            <button
              type="button"
              onClick={() => onAddChild("file")}
              className="text-sm text-blue-600 hover:underline"
            >
              + Add file
            </button>
          </>
        )}
        {!isRoot && (
          <>
            <button type="button" onClick={() => onMove(-1)} className="text-sm text-gray-600 hover:underline">
              Move up
            </button>
            <button type="button" onClick={() => onMove(1)} className="text-sm text-gray-600 hover:underline">
              Move down
            </button>
            <button type="button" onClick={onDelete} className="text-sm text-red-600 hover:underline">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LocationNodeForm;
