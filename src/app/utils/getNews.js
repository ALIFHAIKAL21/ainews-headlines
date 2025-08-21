import { gNewsApi, NewsDataIo, NewsApi } from "./apiKeys";

export async function fetchAiNews() {
    try {


        // Fetch From GNews
        const gnews = await gNewsApi.get("/search", {
            params: { q: "AI", lang: "en", max: 6},
        });

        // Fetch From NewsData.io
        const newsdataio = await NewsDataIo.get("/latest", {
            params: {  q: "CHAT GPT", language: "en", size: 6},
        });

         // Fetch From NewsApi
        const newsapi = await NewsApi.get("/everything", {

            params: { q: "AI" ,language:"en", pageSize:6}
        })


        return {

            gNews: gnews.data,
            newsData: newsdataio.data,
            newsApi: newsapi.data


        };

    } catch (error) {
        console.error("Error fetching AI news:", error);
        return null;
    }
}
