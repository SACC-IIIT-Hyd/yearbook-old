import type { Photo } from "../models/Images"
import Image from "next/image"  
import Link from "next/link"

type Props = {
    photo: Photo
}

export default function ImgContainer({photo}: Props) {

    const widthHeightRatio = photo.height / photo.width
    const galleryHeight = Math.ceil(250 * widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight/10) + 1


    return (
        <div className="w-[250px] justify-self-center "
            style={{ gridRow: `span ${photoSpans}`}}>
            <Link href={photo.url} target="_blank" className="grid place-content-center">
                <div className="rounded-xl overflow-hidden group">
                    <div className="grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 " style={{border: "2px solid #fff"}}>
                        <Image
                            src={photo.src.large}
                            alt={photo.alt}
                            width={250}
                            sizes="250px"
                            placeholder="blur"
                            // style={{opacity:"80%"}}
                            blurDataURL={photo.blurredDataUrl}
                            // className="object-contain group-hover:opacity-80"
                            className="opacity-80 group-hover:opacity-150"

                            height={galleryHeight}
                            // layout="fill"
                            // objectFit="cover"
                        />
                    </div>
                </div>
            </Link>
        </div>
    )
}