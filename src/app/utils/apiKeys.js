import axios from "axios";

// GNews API
export const gNewsApi = axios.create(
{
    baseURL :'https://gnews.io/api/v4',
    params : {
        token : process.env.NEXT_PUBLIC_GNEWS_KEY,
    }
},
)
export const NewsDataIo = axios.create(
{
    baseURL :'https://newsdata.io/api/1',
    params : {
        apikey : process.env.NEXT_PUBLIC_NEWSDATAIO_KEY,
    }
},
)
export const NewsApi = axios.create(
{
    baseURL :'https://newsapi.org/v2',
    params : {
        apikey : process.env.NEXT_PUBLIC_NEWSAPI_KEY,
    }
},
)