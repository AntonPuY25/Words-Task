import axios from "axios";


const Api = {
        getData(){
          return   axios.get('https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json')
                .then(response=>response.data.data)
        }
}

export default Api