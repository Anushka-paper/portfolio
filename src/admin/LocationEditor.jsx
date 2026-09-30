import { useEffect, useState } from "react";
import api from "#api/client";
import LocationTreeView from "#admin/LocationTreeView.jsx";
import LocationNodeForm from "#admin/LocationNodeForm.jsx";
import {
  attachKeys,
  stripKeys,
  getNodeAtPath,
  updateAtPath,
  addChildAtPath,
  removeAtPath,
  moveAtPath,
  makeNode,
} from "#admin/locationTree.js";

// Shared editor for locations.work / .about / .resume — each is a
// recursive folder/file tree, edited as a whole and saved in one PUT.
const LocationEditor = ({ locationKey, title }) => {
  const [root, setRoot] = useState(null);
  const [expanded, setExpanded] = useState(new Set());
  const [selectedPath, setSelectedPath] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const all = await api.get("/api/locations");
      const doc = all[locationKey];
      if (doc) {
        setRoot(attachKeys({ ...doc.root, name: doc.name, icon: doc.icon }));
      } else {
        setError(`No "${locationKey}" location found — seed the database first.`);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    setSelectedPath([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationKey]);

  const toggle = (key) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      const payload = stripKeys(root);
      await api.put(`/api/locations/${locationKey}`, {
        name: payload.name,
        icon: payload.icon,
        root: payload,
      });
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-sm text-gray-400">Loading…</p>;
  if (!root) return <p className="text-sm text-red-500">{error}</p>;

  const selectedNode = getNodeAtPath(root, selectedPath);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-blue-600 text-white text-sm rounded px-4 py-1.5 disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save all changes"}
        </button>
      </div>
      {error && <p className="text-sm text-red-500 mb-2">{error}</p>}
      <div className="grid grid-cols-2 gap-6">
        <LocationTreeView
          root={root}
          expanded={expanded}
          onToggle={toggle}
          selectedPath={selectedPath}
          onSelect={setSelectedPath}
        />
        {selectedNode && (
          <LocationNodeForm
            node={selectedNode}
            isRoot={selectedPath.length === 0}
            onChange={(updated) =>
              setRoot((prev) => updateAtPath(prev, selectedPath, () => updated))
            }
            onAddChild={(kind) => {
              const newNode = makeNode(kind);
              setRoot((prev) => addChildAtPath(prev, selectedPath, newNode));
              setExpanded((prev) => new Set(prev).add(selectedNode._key));
              setSelectedPath([...selectedPath, (selectedNode.children || []).length]);
            }}
            onDelete={() => {
              setRoot((prev) => removeAtPath(prev, selectedPath));
              setSelectedPath(selectedPath.slice(0, -1));
            }}
            onMove={(direction) => {
              setRoot((prev) => moveAtPath(prev, selectedPath, direction));
              // Keep the selection on the node the user was editing, not on
              // whichever node now happens to occupy the same array slot.
              const parentPath = selectedPath.slice(0, -1);
              const index = selectedPath[selectedPath.length - 1];
              const swapWith = index + direction;
              const siblingCount = getNodeAtPath(root, parentPath).children.length;
              if (swapWith >= 0 && swapWith < siblingCount) {
                setSelectedPath([...parentPath, swapWith]);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default LocationEditor;
