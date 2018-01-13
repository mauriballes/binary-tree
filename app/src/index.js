import DataSet from 'vis/lib/DataSet';
import Network from 'vis/lib/network/Network';
import { Tree } from './models/Tree';

// Create Tree
let tree = new Tree();

// create an array with nodes
let nodes = new DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
]);

// create an array with edges
let edges = new DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);

// create a network
let container = $('#mynetwork')[0];

// provide the data in the vis format
let data = {
    nodes: nodes,
    edges: edges
};
let options = {};

// initialize your network!
let network = new Network(container, data, options);
