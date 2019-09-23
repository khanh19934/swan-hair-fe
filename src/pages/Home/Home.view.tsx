import * as React from "react";

import ProductServices from "./modules/ProductServices/ProductServices.view";
import Employees from "./modules/Employees/Employees.view";
import Promotion from "./modules/Promotion/Promotion.view";
import OurWorks from "./modules/OurWorks/OurWorks.view";

const HomeView: React.FC = () => (
  <React.Fragment>
    <ProductServices />
    <Employees />
    <Promotion />
    <OurWorks />
  </React.Fragment>
);

export default HomeView;
