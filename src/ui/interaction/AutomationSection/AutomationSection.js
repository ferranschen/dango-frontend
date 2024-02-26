import React from 'react';
import AutomationList from 'ui/interaction/AutomationSection/AutomationList';
import {SectionTitle} from 'ui/titles';
import { SaveProgramButton, AskAIButton } from 'ui/buttons'
import PopoverWrapper from 'ui/interaction/AutomationSection/PopoverWrapper';

export default function AutomationSection() {
  return (
    <div className="w-full h-full bg-white p-4 rounded-lg shadow-sm hover:border-2 hover:border-gray-200 overflow-y-scroll border">
      <SectionTitle title="Automation List" />
      <AutomationList />
      <div className="mt-2 flex flex-row gap-2">
        <SaveProgramButton />
      </div>
    </div>
  )
}