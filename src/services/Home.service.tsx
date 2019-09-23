import axios from "axios";
import { pathOr } from "ramda";

import { IBanner } from "../models/Home.model";

const getHomeBanner = (): Promise<IBanner[]> =>
  axios.get("http://localhost:1337/banners").then(pathOr([], ["data"]));

export { getHomeBanner };
