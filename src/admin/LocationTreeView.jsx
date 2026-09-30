import clsx from "clsx";

const LocationTreeNode = ({ node, path, depth, expanded, onToggle, selectedPath, onSelect }) => {
  const isSelected = selectedPath.join(".") === path.join(".");
  const isExpanded = expanded.has(node._key);
  const hasChildren = node.kind === "folder";

  return (
    <div>
      <div
        className={clsx(
          "flex items-center gap-1 rounded px-2 py-1 text-sm cursor-pointer",
          isSelected ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
        )}
        style={{ paddingLeft: depth * 16 + 8 }}
        onClick={() => onSelect(path)}
      >
        {hasChildren ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggle(node._key);
            }}
            className="w-4 text-gray-400"
          >
            {isExpanded ? "▾" : "▸"}
          </button>
        ) : (
          <span className="w-4" />
        )}
        <span className="truncate">{node.name}</span>
      </div>
      {hasChildren && isExpanded && (
        <div>
          {(node.children || []).map((child, i) => (
            <LocationTreeNode
              key={child._key}
              node={child}
              path={[...path, i]}
              depth={depth + 1}
              expanded={expanded}
              onToggle={onToggle}
              selectedPath={selectedPath}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const LocationTreeView = ({ root, expanded, onToggle, selectedPath, onSelect }) => (
  <div className="border rounded p-2 max-h-[60vh] overflow-auto">
    <LocationTreeNode
      node={root}
      path={[]}
      depth={0}
      expanded={expanded}
      onToggle={onToggle}
      selectedPath={selectedPath}
      onSelect={onSelect}
    />
  </div>
);

export default LocationTreeView;
