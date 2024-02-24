import React from 'react'
import 'reactflow/dist/base.css'
import ReactFlowWrapper from 'ui/interaction/Provanance/ReactFlowWrapper'
import {SectionTitle} from 'ui/titles'

export default function Provanance() {
  return (
    <div className="w-full h-full bg-white p-4 rounded-lg shadow-sm hover:border-2 hover:border-gray-200 overflow-y-scroll border">
      <SectionTitle title="Data Provenance View" />
      <ReactFlowWrapper />
    </div>
  )
}
