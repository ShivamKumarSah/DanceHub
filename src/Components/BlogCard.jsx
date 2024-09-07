import React from 'react'
import './BlogCard.css'

const BlogCard = () => {
    return (
        <div className="card swiper-slide">
            <div className="image-content">

                <div className="card-image">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="" className="card-img" />
                </div>
            </div>

            <div className="card-content">
                <h2 className="blog-card-title">Mohamed Yousef
                </h2>

                <button className="button">View More</button>
            </div>
        </div>
    )
}

export default BlogCard