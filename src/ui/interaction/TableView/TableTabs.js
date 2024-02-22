import React from "react";
import {
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";

export default function UnderlineTabs() {
    const [activeTab, setActiveTab] = React.useState("html");
    const data = [
        {
            label: "file1.csv",
            value: "html",
        },
        {
            label: "file2.csv",
            value: "react",
        },
        {
            label: "file3.csv",
            value: "vue",
        },
        {
            label: "file4.csv",
            value: "angular",
        }
    ];
    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900  shadow-none rounded-none",
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-gray-900" : "text-gray-500 hover:text-gray-700"}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>

        </Tabs>
    );
}