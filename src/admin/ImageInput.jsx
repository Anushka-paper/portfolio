import { useState } from "react";
import api from "#api/client";

const ImageInput = ({ label, value, onChange }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const { url } = await api.post("/api/uploads", formData);
      onChange(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  return (
    <label className="block space-y-1">
      <span className="text-xs font-medium text-gray-500">{label}</span>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="/images/example.png or https://..."
          className="flex-1 border rounded px-2 py-1 text-sm"
        />
        <input type="file" accept="image/*" onChange={handleFile} className="text-xs" />
      </div>
      {uploading && <p className="text-xs text-gray-400">Uploading…</p>}
      {error && <p className="text-xs text-red-500">{error}</p>}
      {value && (
        <img src={value} alt="" className="h-16 w-auto rounded border object-cover" />
      )}
    </label>
  );
};

export default ImageInput;
