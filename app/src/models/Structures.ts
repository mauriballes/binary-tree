export interface Edges {
  from: number;
  to: number;
  arrows: string;
}

export interface Nodes {
  id: number;
  label: string;
}

export interface NetworkData {
  nodes: Nodes[];
  edges: Edges[];
}
