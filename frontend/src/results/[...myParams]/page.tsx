import Gallery from "@/app/components/Gallery"
import { Container, Typography } from '@mui/material';

type Props = {
    params: {
        myParams: (string | undefined)[]
    }
}

export function generateMetadata({ params: { myParams } }: Props) {

    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"
    return {
        title: `Results for ${topic} - Page ${page}`
    }
}

export default function SearchResults({ params: { myParams } }: Props) {
    
    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom>
                {/* Results for {topic} - Page {page} */}
            </Typography>
            <Gallery topic={topic} page={page} />
        </Container>
    );
}