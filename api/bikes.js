import { BASE_API } from "../utils/constants";
import { authFetch } from "../utils/fetch";


export async function getBikes(props) {
    const {page, per_page, location, serial } = props;
    try {
      const url = `${BASE_API}/search?page=${page}&per_page=${per_page}&location=${location}&serial=${serial}`;
      let result = await authFetch(url, null);
      result = result?.bikes == null ? [] : result.bikes;
      return result;
    } catch (error) {
      return null;
    }
}