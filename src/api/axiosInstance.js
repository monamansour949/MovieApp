import axios from 'axios'

const apiConfig =axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    params :{
        api_key:"f5d806ab74d3be2a2db2f76908165f8b"
    },
    //originalImage :(imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    //w500Image :(imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,

});
export default apiConfig;