import React from 'react';
import { DocumentTextIcon, ViewColumnsIcon } from '@heroicons/react/24/outline'
import PopoverWrapper from 'ui/interaction/AutomationSection/PopoverWrapper';
export default function StatementListItem() {
    return (
        <PopoverWrapper>
            <li className="hover:rounded-md hover:shadow-lg hover:border hover:cursor-default p-2">
                Remove duplicates in{' '}
                <span
                    className="inline-flex items-baseline cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-sm hover:scale-105
                  active:scale-100
                  shadow-sm"
                >
                    <ViewColumnsIcon className="self-center w-5 h-5 rounded-full mx-1 text-gray-400" />
                    <span className="mr-1">Column2</span>
                </span>{' '}
                of{' '}
                <span
                    className="inline-flex items-baseline cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-sm hover:scale-105
                  active:scale-100
                  shadow-sm"
                >
                    <DocumentTextIcon className="self-center w-5 h-5 rounded-full mx-1 text-gray-400" />
                    <span className="mr-1">output1.csv</span>
                </span>{' '}
            </li>
        </PopoverWrapper>
    );
}