import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs: React.FC<{ breadcrumbs: Breadcrumb[] }> = ({ breadcrumbs }) => {
  return (
    <div className="flex items-center text-gray-500">
      {breadcrumbs.map((breadcrumb, i) => (
        <React.Fragment key={i}>
          <a className="hover:text-blue-500" href={breadcrumb.url}>
            {breadcrumb.label}
          </a>
          {i < breadcrumbs.length - 1 && <span className="mx-2"> &gt; </span>}
        </React.Fragment>
      ))}
    </div>
  );
};


const generateBreadcrumbs = (pathname: string): Breadcrumb[] => {
    const paths = pathname.split("/").filter((path) => path !== "");
    const breadcrumbs: Breadcrumb[] = [{ label: "Home", url: "/" }];
  
    let currentPath = "";
    paths.forEach((path) => {
      currentPath += `/${path}`;
      breadcrumbs.push({ label: path, url: currentPath });
    });
  
    return breadcrumbs;
  };



const BreadcrumbTest = () => {
    const location = useLocation();
    const breadcrumbs = generateBreadcrumbs(location.pathname);
    
    return <Breadcrumbs breadcrumbs={breadcrumbs}/>
}


export default BreadcrumbTest;