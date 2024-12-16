import type { ImagesResults } from "@/models/Images"
import { ImagesSchemawithPhotos } from "@/models/Images"
import env from "./env"

export default async function fetchImages(url: string):
Promise<ImagesResults | undefined>{
    try{
        if (!env.PEXELS_API_KEY) {
            throw new Error("PEXELS_API_KEY is not defined");
        }

        const res = await fetch(url, {
            headers: {
                Authorization: env.PEXELS_API_KEY,
            },
        });


        if (!res.ok) {
            throw new Error("Failed to fetch images\n")
        }

        const imagesResults: ImagesResults = await res.json()
        // console.log(imagesResults)

        //parsedata with zod

        const parsedData = ImagesSchemawithPhotos.parse(imagesResults)

        if(parsedData.total_results==0) return undefined
        return parsedData

    } catch(e) {
        if(e instanceof Error) {
            console.error(e.stack)
        }
    }
}