import React from 'react'
import './RegCardSection.css'

const RegCardSection = () => {
    return (
        <section class="reg-section">
            <section class="reg-card">
                <div class="container mx-auto px-4">
                    <h2 class="reg-h">Get Your Free Registration</h2>
                    <p class="mb-8">[Note: May Want A Registration Form Inserted Here & Linked To Dance?]</p>
                    <a href="#" class="inline-block px-8 py-3 bg-red-600 text-white font-medium rounded-md">GET STARTED</a>
                    <a href="#"
                        class="inline-block px-8 py-3 ml-4 border border-white text-white font-medium rounded-md">CONTACT US</a>
                </div>
            </section>
        </section>
    )
}

export default RegCardSection