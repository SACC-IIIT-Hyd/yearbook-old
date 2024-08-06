import fetchImages from "@/lib/fetchimages";
import type { ImagesResults } from "@/models/Images";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "@/lib/getBase64";
import getPrevNextPages from "@/lib/getPrevNextPages";
import Photofooter from "./Photofooter";
import Searchbar from "./Searchbar";
import { Box, Typography } from "@mui/material";
import { Masonry } from '@mui/lab';

type Props = {
    topic?: string | undefined,
    page?: string | undefined,
}

export default async function Gallery({ topic = 'curated', page }: Props) {
    let url;
    if (topic === 'curated' && page) {  //browsing beyond home
        url = `https://api.pexels.com/v1/curated?page=${page}`;
    } else if (topic === 'curated') { //home
        url = "https://api.pexels.com/v1/curated";
    } else if (!page) { //1st page of search
        url = `https://api.pexels.com/v1/search?query=${topic}`;
    } else {
        url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
    }

    const images: ImagesResults | undefined = await fetchImages(url);

    if (!images || images.per_page === 0) {
        return <Typography variant="h4" sx={{ m: 4, fontWeight: 'bold' }}>No Images Found</Typography>;
    }

    const photosWithBlur = await addBlurredDataUrls(images);

    const { prevPage, nextPage } = getPrevNextPages(images);

    const footerProps = { topic, page, nextPage, prevPage };

    return (
        <Box sx={{ backgroundColor: "#0b1120", textAlign: "center", alignContent: "center", alignItems: "center"}}>
            <Searchbar />
            <Box sx={{ my: 3, backgroundColor: "#0b1120", alignContent: "center", textAlign: "center", display: "flex" }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    maxWidth: {
                        xs: '100%',
                        sm: '90%',
                        md: '80%',
                        lg: '65%',
                    },
                    columnGap: 0,
                    margin: '0 auto',
                    backgroundColor: "#0b1120",
                }}>
                    <Masonry columns={{xs:1, sm:2, md:3, lg:4}} spacing={2}>
                        {photosWithBlur.map((photo) => (
                            <div key={photo.id}>
                                <ImgContainer photo={photo} />
                            </div>
                        ))}
                    </Masonry>
                </Box>
            </Box>

            <Photofooter {...footerProps} />
        </Box>
    );
}