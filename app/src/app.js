import DataSet from 'vis/lib/DataSet';
import Network from 'vis/lib/network/Network';
import {Tree} from './models/Tree';

export class App {
  constructor(container) {
    this.tree = new Tree();
    this.nodes = new DataSet({});
    this.edges = new DataSet({});
    let data = {
      nodes: this.nodes,
      edges: this.edges
    };
    this.network = new Network(container, data, {});
  }
  insert(value) {
    this.tree.insert(value);
  }
  find(value) {
    return this.tree.find(value);
  }
  remove(value) {
    this.tree.remove(value);
  }
}
