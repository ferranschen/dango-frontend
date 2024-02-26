import React, { useCallback } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
  ControlButton,
} from 'reactflow'
import CustomNode from 'ui/interaction/Provanance/CustomNode'
import { Tooltip } from '@material-tailwind/react'

const nodeTypes = {
  custom_1: CustomNode,
}

const initNodes = [
  {
    id: '1',
    type: 'custom_1',
    data: { name: 'input.csv (v0)', job: 'CEO', emoji: '😎' },
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'custom_1',
    data: { name: 'input.csv (v1)', job: 'Designer', emoji: '🤓' },

    position: { x: -200, y: 200 },
  },
  {
    id: '3',
    type: 'custom_1',
    data: { name: 'output.csv (v0)', job: 'Developer', emoji: '🤩' },
    position: { x: 200, y: 200 },
  },
]

const initEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
]

export default function ReactFlowWrapper() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  )

  return (
    <div
      style={{ width: '100%', height: '95%' }}
      className="border-solid border rounded-lg"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  )
}
