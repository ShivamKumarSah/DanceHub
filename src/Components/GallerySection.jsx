import React from 'react'
import './GallerySection.css'

const GallerySection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p className="style-font">Dance Gallery</p>
                    <h2 className="text-[#3d3d3d] text-3 font-bold md:text-[45px] mb-8">
                        Our Dance Class Gallery
                    </h2>
                </div>

                <div className="container">
                    <div className="gallery">
                        <div className="gallery__item gallery__item--hor">
                            <img src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/gallery_1_1.jpg" />
                        </div>
                        <div className="gallery__item">
                            <img src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/gallery_1_2.jpg" />
                        </div>
                        <div className="gallery__item">
                            <img src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/gallery_1_4.jpg" />
                        </div>
                        <div className="gallery__item gallery__item--vert">
                            <img src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/gallery_1_3.jpg" />
                        </div>
                        <div className="gallery__item gallery__item--lg">
                            <img src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/gallery_1_4.jpg" />
                        </div>
                        <div className="gallery__item">
                            <img src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/gallery_1_5.jpg" />
                        </div>
                        <div className="gallery__item">
                            <img src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/gallery_1_4.jpg" />
                        </div>
                        <div className="gallery__item">
                            <img src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/gallery_1_4.jpg" />
                        </div>
                        <div className="gallery__item">
                            <img src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/gallery_1_5.jpg" />
                        </div>
                        <div className="gallery__item">
                            <img src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/gallery_1_5.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default GallerySection