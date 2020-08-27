class DataSource {
    /*
        Gunakan ini untuk bagian fitur pencarian
        next feature
    */
    static getEverythingArticles(category) {
        const url = 'https://newsapi.org/v2';
        const endpoint = '/top-headlines';
        let parameterOption = `?country=id&apiKey=27de8fd90e3d48f8a9cccba3b51a07f7`;

        //
        category ? parameterOption += `&category=${category}` : ""; 

        return fetch(`${url+endpoint+parameterOption}`)
            .then(response => {
                //convert response to JSON
                response = response.json();
                
                /* response.totalResults */
                if (response.articles) {
                    return Promise.resolve(response.articles);
                } else {
                    return Promise.reject(`${response.status}, Gagal mengambil data`);
                }
            });
    }

    static getTopHeadlinesArticles(category = null) {
        const url = 'https://newsapi.org/v2';
        const endpoint = '/top-headlines';
        let parameterOption = `?country=id&pageSize=20&apiKey=27de8fd90e3d48f8a9cccba3b51a07f7`;

        //
        category ? parameterOption += `&category=${category}` : "";

        return fetch(url+endpoint+parameterOption)
                .then(response => {
                    //convert response to JSON
                    return response.json();
                })
                .then(responseJson => {
                    // console.log(responseJson.articles);
                    /* response.totalResults */
                    if (responseJson.articles) {
                        return Promise.resolve(responseJson.articles);
                    } else {
                        return Promise.reject(`${responseJson.status}, Gagal mengambil data`);
                    }
                });
    }
}

export default DataSource;