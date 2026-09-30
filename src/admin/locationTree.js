// Immutable helpers for editing the recursive folder/file tree used by
// locations.work / locations.about / locations.resume. Nodes are addressed
// by `path`: an array of child indices from the root (e.g. [1, 0] = the
// root's 2nd child's 1st child). Root itself is path [].

let counter = 0;
export function makeNode(kind) {
  counter += 1;
  const base = {
    _key: `new-${Date.now()}-${counter}`,
    name: kind === "folder" ? "New Folder" : "New File",
    icon: kind === "folder" ? "/images/folder.png" : "/images/txt.png",
    kind,
  };
  if (kind === "folder") {
    return { ...base, position: "", windowPosition: "", children: [] };
  }
  return { ...base, fileType: "txt", position: "", description: [] };
}

// Loaded nodes carry a Mongo `_id`; give every node a stable `_key` for
// React lists / selection without mutating the `_id` that gets sent back.
export function attachKeys(node) {
  return {
    ...node,
    _key: node._id || node._key || `k-${Date.now()}-${Math.random()}`,
    children: node.children ? node.children.map(attachKeys) : node.children,
  };
}

export function stripKeys(node) {
  const { _key, children, ...rest } = node;
  return {
    ...rest,
    ...(children ? { children: children.map(stripKeys) } : {}),
  };
}

export function getNodeAtPath(root, path) {
  return path.reduce((node, idx) => node.children[idx], root);
}

export function updateAtPath(root, path, updater) {
  if (path.length === 0) return updater(root);
  const [idx, ...rest] = path;
  return {
    ...root,
    children: root.children.map((child, i) =>
      i === idx ? updateAtPath(child, rest, updater) : child
    ),
  };
}

export function addChildAtPath(root, path, newNode) {
  return updateAtPath(root, path, (node) => ({
    ...node,
    children: [...(node.children || []), newNode],
  }));
}

export function removeAtPath(root, path) {
  const parentPath = path.slice(0, -1);
  const index = path[path.length - 1];
  return updateAtPath(root, parentPath, (parent) => ({
    ...parent,
    children: parent.children.filter((_, i) => i !== index),
  }));
}

export function moveAtPath(root, path, direction) {
  const parentPath = path.slice(0, -1);
  const index = path[path.length - 1];
  return updateAtPath(root, parentPath, (parent) => {
    const swapWith = index + direction;
    if (swapWith < 0 || swapWith >= parent.children.length) return parent;
    const children = [...parent.children];
    [children[index], children[swapWith]] = [children[swapWith], children[index]];
    return { ...parent, children };
  });
}
