import React, { useState, useRef } from 'react';
import HandsontableInstance from 'ui/interaction/TableView/HandsonTable';
import { UploadFileButton, StartRecordButton, StopRecordButton } from 'ui/buttons';
import { SectionTitle } from 'ui/titles';
import UnderlineTabs from 'ui/interaction/TableView/TableTabs';

export default function TableView() {
  const fileInputRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Process the uploaded file
    console.log('Uploaded file:', file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className=" w-full h-full bg-white p-4 rounded-lg shadow-sm hover:border-2 hover:border-gray-200 overflow-y-scroll flex justify-between space-x-2 border">
      <div className="flex flex-col h-full overflow-x-scroll">
       
        <SectionTitle title="Table View" />
        <UnderlineTabs />
        <div className="border my-4 border-gray-200 rounded-lg p-2 h-5/6 relative">
          <HandsontableInstance filename="input1.csv" />
          {isRecording ? (
            <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 animate-pulse absolute right-4 top-4 transition duration-300">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="5" fill="red" />
              </svg>
              Recording
            </span>) : null
          }
          
        </div>
        <div className="flex flex-row gap-2 ml-2">
          <UploadFileButton onClick={handleButtonClick} />
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
          {isRecording ? (
            <StopRecordButton onClick={() => setIsRecording(false)} text=""/>
          ) : (
            <StartRecordButton onClick={() => setIsRecording(true)} />
          )}
        </div>
        
      </div>
    </div>
  )
}