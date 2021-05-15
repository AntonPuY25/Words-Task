import axios from "axios";


const Api = {
        getData(){
          return   axios.get('https://www.mrsoft.by/data.json')
                .then(response=>response.data.data)
        }
}

export default Api