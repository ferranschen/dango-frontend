import React, { useRef } from 'react';
import HandsontableInstance from 'ui/interaction/TableView/HandsonTable';
import {AddFileButton} from 'ui/buttons';
import { SectionTitle } from 'ui/titles';
import UnderlineTabs from 'ui/interaction/TableView/TableTabs';

export default function TableView() {
  const fileInputRef = useRef(null);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Process the uploaded file
    console.log('Uploaded file:', file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full h-full bg-white p-4 rounded-lg shadow-lg hover:border-2 hover:border-gray-200 overflow-y-scroll flex justify-between space-x-2">
      <div className="flex flex-col h-full overflow-x-scroll">
       
        <SectionTitle title="Table View" />
        <UnderlineTabs />
        <HandsontableInstance filename="input1.csv" />
        <div className="flex flex-row gap-2 ml-2">
          <AddFileButton onClick={handleButtonClick} />
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
        
      </div>
    </div>
  )
}