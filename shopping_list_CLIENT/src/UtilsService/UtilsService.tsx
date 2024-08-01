import axios from 'axios';
export default class UtilsService {
    getCategories(url:any) {
        return axios.get(url).then(res => res.data);
    }
    postOrder(url:string,order:any) {
        return axios.post(url,{order}).then(res => res.data);
    }
}




    
    