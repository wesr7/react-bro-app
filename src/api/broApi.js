class BroApi {
    static getAllBros() {
        return fetch("https://warm-mesa-69950.herokuapp.com/api/v1/bros").then(response => {
                return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default BroApi