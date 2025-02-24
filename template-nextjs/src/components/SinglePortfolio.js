"use client";

import Image from "next/image";
import Link from "next/link";
import { SlideshowLightbox } from "lightbox.js-react";

export default function SinglePortfolio(props) {
  const { image, title, category } = props;

  const imageUrl = typeof image === "object" ? image.src : image;
  const sanitizedIdentifier = imageUrl.replace(/[^a-zA-Z0-9]/g, "");

  const images = [{ id: sanitizedIdentifier, src: imageUrl }];
  return (
    <>
      <SlideshowLightbox
        lightboxIdentifier={`lightbox-${sanitizedIdentifier}`}
        showThumbnails={false}
        imgAnimation="fade"
        thumbnailBorder="white"
        iconColor="white"
        framework="next"
        images={images}
      >
        <div className="portfolio-single">
          <div className="portfolio-img">
            {imageUrl && (
              <div key={imageUrl}>
                <Image src={imageUrl} alt="#" width={350} height={350} />
              </div>
            )}
          </div>
          <div className="portfolio-content">
            <h4>
              <Link href="/portfolio-single">
                {title ? title : "Art & Studio"}
              </Link>
            </h4>
            <p>{category ? category : "UI/UX, Branding"}</p>
          </div>
          <Link
            className="p-button"
            href="#portfolio"
            data-lightboxjs={`lightbox-${sanitizedIdentifier}`}
          >
            <i className="fa fa-image"></i>
          </Link>
        </div>
      </SlideshowLightbox>
    </>
  );
}
