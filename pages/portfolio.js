import Head from "next/head";
import { useState } from "react";

import ProjectList from "../components/project-list";

export default function BlogPage() {
    // used only to refresh the component, the actual value is always extracted from the url
    const [currentList, setCurrentList] = useState();
    const [currentSearch, setCurrentSearch] = useState();
    const [currentYear, setCurrentYear] = useState();
    const [currentMonth, setCurrentMonth] = useState();

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <div className="fadeIn">
                <div className="blogfolio mt-5">
                    <p className="">PORTFOLIO</p>
                </div>

                <ProjectList
                    setCurrentList={setCurrentList}
                    currentSearch={currentSearch}
                    currentYear={currentYear}
                    currentMonth={currentMonth}
                    size="small"
                />
            </div>
        </>
    );
}
