import { useEffect, useState } from "react";
import api from "#api/client";
import ImageInput from "#admin/ImageInput.jsx";

// Generic list + form editor reused for the flat content collections
// (gallery, blog posts, socials, tech stack, photos links) — they all
// share the same list/create/update/delete shape, only the field
// definitions differ.
const CrudSection = ({ title, apiPath, fields, emptyItem, summarize }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState(emptyItem);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const docs = await api.get(apiPath);
      setItems(docs.map(({ _id, id, ...rest }) => ({ id: id ?? _id, ...rest })));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiPath]);

  const startEdit = (item) => {
    setEditingId(item.id);
    setForm(fields.reduce((acc, f) => ({ ...acc, [f.name]: item[f.name] }), {}));
  };

  const startNew = () => {
    setEditingId(null);
    setForm(emptyItem);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      if (editingId) {
        await api.put(`${apiPath}/${editingId}`, form);
      } else {
        await api.post(apiPath, form);
      }
      startNew();
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this item?")) return;
    setError("");
    try {
      await api.delete(`${apiPath}/${id}`);
      if (editingId === id) startNew();
      await load();
    } catch (err) {
      setError(err.message);
    }
  };

  const renderField = (field) => {
    const value = form[field.name];
    if (field.type === "image") {
      return (
        <ImageInput
          key={field.name}
          label={field.label}
          value={value}
          onChange={(v) => setForm((f) => ({ ...f, [field.name]: v }))}
        />
      );
    }
    if (field.type === "list") {
      return (
        <label key={field.name} className="block space-y-1">
          <span className="text-xs font-medium text-gray-500">{field.label}</span>
          <input
            type="text"
            value={(value || []).join(", ")}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                [field.name]: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
              }))
            }
            className="w-full border rounded px-2 py-1 text-sm"
          />
        </label>
      );
    }
    return (
      <label key={field.name} className="block space-y-1">
        <span className="text-xs font-medium text-gray-500">{field.label}</span>
        <input
          type="text"
          value={value || ""}
          onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
          className="w-full border rounded px-2 py-1 text-sm"
        />
      </label>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h2 className="text-lg font-semibold mb-3">{title}</h2>
        {loading ? (
          <p className="text-sm text-gray-400">Loading…</p>
        ) : (
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border rounded px-3 py-2 text-sm"
              >
                <span className="truncate">{summarize ? summarize(item) : item.id}</span>
                <span className="flex gap-2 shrink-0">
                  <button onClick={() => startEdit(item)} className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </span>
              </li>
            ))}
            {items.length === 0 && <p className="text-sm text-gray-400">No items yet.</p>}
          </ul>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 border rounded p-4 h-fit">
        <h3 className="font-medium">{editingId ? "Edit item" : "Add new item"}</h3>
        {fields.map(renderField)}
        {error && <p className="text-sm text-red-500">{error}</p>}
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 text-white text-sm rounded px-3 py-1.5 disabled:opacity-50"
          >
            {saving ? "Saving…" : editingId ? "Save changes" : "Add"}
          </button>
          {editingId && (
            <button type="button" onClick={startNew} className="text-sm text-gray-500">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CrudSection;
