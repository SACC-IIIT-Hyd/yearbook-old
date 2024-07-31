import { Button, Box } from "@mui/material"
import Link from 'next/link'

type Props = {
    topic: string,
    page: string | undefined,
    prevPage: string | null
    nextPage: string | null,
}

export default function Photofooter({ topic, page, prevPage, nextPage}: Props) {
    if(!prevPage && !nextPage) return null;
    const pageNums: number[] = []

    if(prevPage && nextPage) {
        for (let i= parseInt(prevPage)+1;i<parseInt(nextPage);i++) {
            pageNums.push(i)
        }
    }

    const nextPageArea = nextPage 
        ? (
            <Link href={`/results/${topic}/${nextPage}`} passHref>
                <Button size="small" className={!prevPage ? "mx-auto" : ""} style={{color: 'white'}}>
                    {!prevPage ? "more" : null} &gt;&gt;&gt;
                </Button>
            </Link>
        )
    : null

    const prevPageArea = prevPage 
        ? (
            <>
                <Link href={`/results/${topic}/${prevPage}`} passHref>
                    <Button className={!prevPage ? "mx-auto" : ""} style={{color: 'white'}}>
                        &lt;&lt;&lt; {!prevPage ? "back" : null} 
                    </Button>
                </Link>

                {pageNums.map(num => (
                    page && num === parseInt(page)
                        ? num
                        : (
                            <Link href={`/results/${topic}/${num}`} passHref>
                                <Button className="underline" style={{color: 'white'}}>{num}</Button>
                            </Link>
                        )
                ))}

            </>
        )
    : null

    return (
        <Box component="footer" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" p={2} className="font-bold w-60 mx-auto text-white">
            {prevPageArea}
            {nextPageArea}
        </Box>
    )
}